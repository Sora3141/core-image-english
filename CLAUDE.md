# コアイメージ英語

T.OF... のアプリ。https://t-of.github.io/core-image-english/

- ルールは本部の `~/GitHub/tof/t-of.github.io/RULES.md` に従う（全アプリ共通）。ブランドは `docs/BRAND.md`。
- 直したら本部で `npm run audit:browser -- core-image-english` を通す。
- 公開は本部の `docs/RELEASE.md` の手順。大きな作業は本部で Claude を起動すると、役割を分けて進められる。
- localStorage のキーは `coreEn.` で始める（既存の記録があるので変えない）。SW のキャッシュ名は `core-image-english-` で始める。
