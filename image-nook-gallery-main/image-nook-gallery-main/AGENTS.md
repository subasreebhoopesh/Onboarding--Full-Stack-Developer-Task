<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project decisions
- The Record dashboard (src/routes/index.tsx + src/components/dashboard/*) is frontend-only with mock data in src/data/dashboard.ts; do not wire server functions or a database unless the user asks.
- All Record dashboard colors (brand, progress bar, hero, heatmap, partner logos) are semantic tokens in src/styles.css (:root/@theme inline); components reference tokens, never raw hex.
