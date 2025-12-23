// This log helps confirm the correct script is loaded
console.log("script.js loaded successfully");

async function transfer() {
  const token = document.getElementById("token").value.trim();
  const receiverId = document.getElementById("receiverId").value.trim();
  const amount = document.getElementById("amount").value.trim();

  if (!token || !receiverId || !amount) {
    document.getElementById("status").innerText =
      "Please fill all fields";
    return;
  }

  let res;
  let data = {};

  try {
    res = await fetch("http://localhost:5000/transfer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({
        receiverId: receiverId,
        amount: Number(amount)
      })
    });

    // Try parsing JSON safely (even if backend sends empty body)
    try {
      data = await res.json();
    } catch (e) {
      data = {};
    }

    if (res.ok) {
      document.getElementById("status").innerText =
        "Transfer successful";
      loadHistory();
    } else {
      document.getElementById("status").innerText =
        data.message || "Transfer failed";
    }

  } catch (error) {
    console.error(error);
    document.getElementById("status").innerText =
      "Server error. Is backend running?";
  }
}

async function loadHistory() {
  const token = document.getElementById("token").value.trim();

  if (!token) return;

  let res;
  let data = [];

  try {
    res = await fetch("http://localhost:5000/audit", {
      headers: {
        "Authorization": "Bearer " + token
      }
    });

    try {
      data = await res.json();
    } catch (e) {
      data = [];
    }

    const table = document.getElementById("history");
    table.innerHTML = "";

    if (!Array.isArray(data)) return;

    data.forEach(tx => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${tx.senderId}</td>
        <td>${tx.receiverId}</td>
        <td>${tx.amount}</td>
        <td>${tx.status}</td>
        <td>${new Date(tx.timestamp).toLocaleString()}</td>
      `;

      table.appendChild(row);
    });

  } catch (error) {
    console.error("Failed to load history", error);
  }
}

