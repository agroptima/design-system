const LOREM = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
In tincidunt nisi libero, nec semper nunc hendrerit vel.
Duis at convallis turpis. Sed eget elit non nisl pharetra efficitur rutrum id neque.
Etiam facilisis purus non lobortis mollis. Sed varius viverra arcu et sodales.
Sed ante tortor, tincidunt quis condimentum non, ultrices fermentum ligula.
Suspendisse mattis lacus non rhoncus eleifend. Nulla volutpat lectus eget neque sodales tempus.
Ut magna elit, lobortis sit amet massa ac, luctus sodales libero.
`

export function LoremIpsum({ lorems }: { lorems: number }) {
  return Array.from({ length: lorems }).map((_, index) => (
    <p key={`lorem-${index}`}>{LOREM}</p>
  ))
}
