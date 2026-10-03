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

- Render products as freely scrollable, approximately two-card-wide items below the `sm` breakpoint and as the existing grid above it, so mobile users can stop anywhere and see the next card edge.
- Enable mobile product scrolling and its navigation dots only when the product row actually overflows, so short product lists display normally.
- Group the catalog visibly by product category without hiding any items by default; keep each small-screen category independently scrollable only if it overflows, so short groups need no sliding.
