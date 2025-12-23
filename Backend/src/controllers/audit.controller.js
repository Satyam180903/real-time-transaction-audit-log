const prisma = require("../prisma");

exports.getHistory = async (req, res) => {
  const userId = req.userId;

  const history = await prisma.transactionAudit.findMany({
    where: {
      OR: [{ senderId: userId }, { receiverId: userId }]
    },
    orderBy: { timestamp: "desc" }
  });

  res.json(history);
};
