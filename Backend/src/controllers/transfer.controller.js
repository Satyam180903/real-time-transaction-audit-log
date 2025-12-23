const prisma = require("../prisma");

exports.transferAmount = async (req, res) => {
  const senderId = req.userId;
  const { receiverId, amount } = req.body;

  try {
    const result = await prisma.$transaction(async (tx) => {
      const sender = await tx.user.findUnique({ where: { id: senderId } });
      if (!sender || sender.balance < amount) {
        throw new Error("Insufficient balance");
      }

      const receiver = await tx.user.findUnique({ where: { id: receiverId } });
      if (!receiver) {
        throw new Error("Receiver not found");
      }

      await tx.user.update({
        where: { id: senderId },
        data: { balance: sender.balance - amount }
      });

      await tx.user.update({
        where: { id: receiverId },
        data: { balance: receiver.balance + amount }
      });

      await tx.transactionAudit.create({
        data: {
          senderId,
          receiverId,
          amount,
          status: true
        }
      });

      return { balance: sender.balance - amount };
    });

    res.json({ message: "Transfer successful", ...result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
