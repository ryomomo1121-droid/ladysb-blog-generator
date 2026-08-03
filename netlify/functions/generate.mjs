const FACTS_TEXT = `
施設名: Lady's Base（レディースベース）
所在地: 〒518-0007 三重県伊賀市服部町365-1
電話番号: 0595-51-6878
アクセス: 伊賀上野駅・上野市駅から車で約5分
公式LINE: https://lin.ee/spBio7G
Instagram: https://www.instagram.com/ladysbase__iga/
施設の特徴: 女性専用の複合施設。清潔感のある空間。グループピラティス（pilatesMUSK）、24時間ジム（NaturaFit）、パーソナルトレーニング（andmake）の3サービスを併設し、同時利用するとお得になる。

サービス1　グループピラティス pilatesMUSK（マシンピラティス、初心者歓迎）
・初回体験: 無料
・入会時初期費用: 入会金5,000円+施設利用料5,000円=10,000円（税込）
・月4回プラン: 9,500円/月（週1回ペース向け）
・デイ会員プラン: 10,350円/月（平日9時〜16時、1日1レッスンまで通い放題）
・通い放題プラン: 12,000円/月（1日1回いつでも通い放題、一番人気）
・都度払いチケット: 3,500円/回（会員登録不要）
・NaturaFit相互利用プラン: MUSK月額に+1,078円で24時間ジムも使い放題

サービス2　24時間ジム NaturaFit
・通い放題プラン: 3,278円/月（24時間ジム、個室美容機器、骨盤底筋チェア、全自動乾燥機ランドリーが使い放題）
・O2ボックスオプション（酸素カプセル）: +2,200円/月
・MUSK会員限定相互利用プラン: 通常3,278円が1,078円/月に割引

サービス3　パーソナルトレーニング andmake
・トライアルプラン（初回限定）: 5,000円（税込）、丁寧なカウンセリング+マンツーマン体験
・得意分野: 体型・姿勢改善、肩こり等の不調改善、将来に備えた運動の習慣化、運動機能の向上、便秘・腸活
・プライベートチケットプラン（60分/回、週1〜2回ペース）: 4回30,000円（7,500円/回）、8回56,000円（7,000円/回）、16回104,000円（6,500円/回）、24回144,000円（6,000円/回）、32回176,000円（5,500円/回）、40回212,000円（5,300円/回）、48回244,800円（5,100円/回）、64回313,600円（4,900円/回）、96回451,200円（4,700円/回）
・プライベート月額プラン（6ヶ月継続制）: 月4回24,000円（6,000円/回）、月8回44,000円（5,500円/回）
・食事管理プラン追加時のチケット: 4回38,000円（9,500円/回）〜96回643,200円（6,700円/回）
・食事管理プラン追加時の月額: 月4回32,000円（8,000円/回）、月8回60,000円（7,500円/回）

トレーナー紹介
・滝本優子: ピラティスインストラクター/パーソナルトレーナー/BASI Pilates養成コース卒業。「身体も心も前向きに。あなたに寄り添うピラティスレッスン」
・赤澤美花: ピラティスインストラクター/パーソナルトレーナー/介護予防フィットネストレーナー。「未来の健康まで見据えた、しなやかで動ける身体づくりを。」
・大田梨穂: ピラティスインストラクター。「身体も心も軽くなる、心地よいピラティス時間を。」
・岩脇由貴: パーソナルトレーナー/ピラティスインストラクター。「また来たいと思える、楽しく続けられるトレーニングを。」

会員さまの実績データ（andmakeご利用者のビフォーアフター）
・32歳/163cm、プライベートチケット+食事管理、3ヶ月: 体重70.6→63.7kg（-6.9kg）、体脂肪34.5→30.2%（-4.3%）、ウエスト88.5→77.0cm（-11.5cm）
・52歳/155cm、プライベート月額+食事管理、5ヶ月: 体重69.5→65.0kg（-4.5kg）、体脂肪38.1→35.0%（-3.1%）、ウエスト97.5→88.7cm（-8.8cm）
・37歳/159cm、プライベートチケット、3ヶ月: 体重78.0→64.2kg（-13.8kg）、体脂肪-10%、ウエスト-20cm
・31歳/161cm、プライベートチケット、3ヶ月: 体重64.8→54.9kg（-9.9kg）、体脂肪30.2→24.0%（-6.2%）、ウエスト-17cm
・45歳/172cm、プライベートチケット、3ヶ月: 体重70.7→65.7kg、体脂肪32.5→29.5%、ウエスト95.8→76.0cm（-19.8cm）
※これらは実際の会員さまの数値ですが、効果には個人差があることを必ず文中に明記すること。ここに書かれていない実績や口コミを新しく作り出さないこと。

内部リンク候補
・料金ページ: /price/
・パーソナルトレーニング(andmake): /andmake/
・グループピラティス(pilatesMUSK): /pilatesmusk/
・24時間ジム(NaturaFit): /naturafit/
・よくある質問: /faq/
・施設について: /about/
・お問い合わせ: /contact
・ビフォーアフター一覧: /beforeafter/
`.trim();

function buildPrompt(theme, historyTitles) {
  const historyText = historyTitles.length
    ? historyTitles.map((t) => "・" + t).join("\n")
    : "（まだありません）";

  return `
あなたはLady's Base（三重県伊賀市の女性専用ピラティス・パーソナル複合施設）専属のSEOライターです。
以下のルールに厳密に従って、日本語のブログ記事を1本作成し、指定するJSON形式だけで出力してください。

【文章のトーン】
・読者の悩みにやさしく寄り添い、前向きな気持ちになれる文章にすること
・専門用語を使うときは必ずやさしい言葉で言い換えること
・AIが書いたと分からないよう、自然で親しみやすい日本語にすること
・本文の中に記号（*、#、**、---、「」以外の記号）は一切使わないこと
・そのままコピーして貼り付けてすぐ使える、整った文章にすること

【SEOの方針】
・読者の検索意図を100%満たすことを最優先にすること
・具体的な数字、比較、メリットとデメリット、注意点を必ず盛り込むこと
・キーワードの詰め込みは禁止。自然な文脈の中で使うこと
・一文は60〜80文字程度、段落は2〜4行程度でまとめること
・結論を先に書くこと
・見出し(H2)は3〜6個。読者の悩みに応じて必要ならH3の小見出しを追加してよい
・本文全体で2000〜3000文字程度を目安にすること

【絶対に守ること】
・Lady's Baseに関する事実（住所、電話番号、料金、トレーナー名、実績データなど）は、下記の「事実情報」に書かれている内容だけを使うこと。書かれていない数字や実績、お客様の声を新しく作り出さないこと
・分からないことは無理に断定せず、一般的な表現にとどめること
・すでに公開済みの記事タイトルと同じ切り口・同じ見出し構成にならないよう、今回のテーマならではの新しい角度で書くこと。タイトルの言い回しも過去のものと重複させないこと

【今回のテーマ・キーワード】
${theme}

【すでに公開済みの記事タイトル一覧（この切り口・表現と重複させないこと）】
${historyText}

【Lady's Baseの事実情報（この範囲内でのみ事実を書くこと）】
${FACTS_TEXT}

【出力形式】
説明文や前置きは書かず、次のJSON形式だけを出力してください。コードブロック記号（バッククォート3つなど）も付けないでください。

{
  "title": "SEOキーワードを含めたタイトル",
  "intro": "導入文（2〜4段落程度、\\n\\nで段落を区切る）",
  "toc": ["見出し1のテキスト", "見出し2のテキスト", "..."],
  "sections": [
    {
      "heading": "H2見出しのテキスト",
      "body": "本文（\\n\\nで段落を区切ってよい）",
      "subsections": [
        { "heading": "H3見出しのテキスト", "body": "本文" }
      ]
    }
  ],
  "summary": "まとめの本文",
  "cta": {
    "heading": "CTAの見出し（お問い合わせ・体験のご案内などを促す一言）",
    "body": "CTA本文（体験のご案内、住所、電話番号、公式LINE、関連ページへの案内などを含める）"
  },
  "seoMemo": {
    "mainKeyword": "想定メインキーワード",
    "relatedKeywords": "関連キーワード（カンマ区切り）",
    "metaDescription": "メタディスクリプション案（100〜120字）",
    "internalLinks": "内部リンク候補（カンマ区切り、パスと説明）"
  }
}

subsectionsは不要な場合は空配列にしてください。上記のJSON以外の文字は一切出力しないでください。
`.trim();
}

function extractParsedJson(text) {
  let s = text.trim();
  s = s.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/i, "").trim();
  const first = s.indexOf("{");
  const last = s.lastIndexOf("}");
  if (first !== -1 && last !== -1 && last > first) {
    s = s.slice(first, last + 1);
  }
  return JSON.parse(s);
}

export default async (req, context) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "POST only" }), {
      status: 405,
      headers: { "content-type": "application/json" },
    });
  }

  let body;
  try {
    body = await req.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: "invalid json body" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const theme = (body.theme || "").toString().trim().slice(0, 200);
  const historyTitles = Array.isArray(body.historyTitles)
    ? body.historyTitles.slice(0, 40).map((t) => String(t).slice(0, 200))
    : [];

  if (!theme) {
    return new Response(JSON.stringify({ error: "theme is required" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const apiKey = Netlify.env.get("ANTHROPIC_API_KEY");
  if (!apiKey) {
    return new Response(
      JSON.stringify({
        error: "ANTHROPIC_API_KEY is not configured on this site yet.",
      }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }

  const prompt = buildPrompt(theme, historyTitles);

  try {
    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 4000,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      return new Response(
        JSON.stringify({ error: "Anthropic API error", detail: errText }),
        { status: 502, headers: { "content-type": "application/json" } }
      );
    }

    const data = await resp.json();
    const text = (data.content || [])
      .map((c) => c.text || "")
      .join("\n")
      .trim();

    let parsed = null;
    try {
      parsed = extractParsedJson(text);
    } catch (e) {
      parsed = null;
    }

    return new Response(JSON.stringify({ raw: text, data: parsed }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (e) {
    return new Response(
      JSON.stringify({
        error: "request failed",
        detail: String((e && e.message) || e),
      }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
};

export const config = {
  path: "/api/generate",
};
