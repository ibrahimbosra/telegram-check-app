export default async function handler(req, res) {
  const BOT_TOKEN = '7759244119:AAGi2FCrKpRxAL-LmXBoT9YARKTkf1H3P6I';
  const CHANNEL_USERNAME = '@MegaMiningCrypto';
  const { user_id } = req.query;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/getChatMember?chat_id=${CHANNEL_USERNAME}&user_id=${user_id}`;

  try {
    const tgRes = await fetch(url);
    const json = await tgRes.json();

    if (json.ok) {
      return res.status(200).json({ ok: true, status: json.result.status });
    } else {
      return res.status(200).json({ ok: false });
    }
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
}
