import './Typography.scss'

export function Typography(): React.JSX.Element {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>h1</td>
            <td>
              <h1>“Waka Waka Waka” - Pacman</h1>
            </td>
          </tr>
          <tr>
            <td>h2</td>
            <td>
              <h2>“Do a barrel roll!” - Star Fox 64</h2>
            </td>
          </tr>
          <tr>
            <td>h3</td>
            <td>
              <h3>“Kept you waiting, huh?" - MGS</h3>
            </td>
          </tr>
          <tr>
            <td>h4</td>
            <td>
              <h4>“Hey! Look! Listen!" - TLoZ</h4>
            </td>
          </tr>
          <tr>
            <td>.body-regular-primary</td>
            <td>
              <span className="body-regular-primary">
                “Endure and survive.” - The Last of Us
              </span>
            </td>
          </tr>
          <tr>
            <td>.body-regular-secondary</td>
            <td>
              <span className="body-regular-secondary">
                “A famous explorer once said that the extraordinary is in what
                we do, not who we are.” - Tomb Raider
              </span>
            </td>
          </tr>
          <tr>
            <td>.body-regular-error</td>
            <td>
              <span className="body-regular-error">
                “Praise the sun!” - Dark Souls
              </span>
            </td>
          </tr>
          <tr>
            <td>.body-regular-warning</td>
            <td>
              <span className="body-regular-warning">
                “You’ve met with a terrible fate, haven’t you?” - TLoZ
              </span>
            </td>
          </tr>
          <tr>
            <td>.body-regular-disabled</td>
            <td>
              <span className="body-regular-disabled">
                “Whatever.” - Final Fantasy VIII
              </span>
            </td>
          </tr>
          <tr>
            <td>.body-underline</td>
            <td>
              <span className="body-underline">
                “Nothing is true, everything is permitted.” - Assassin’s Creed
              </span>
            </td>
          </tr>
          <tr>
            <td>.body-link</td>
            <td>
              <span className="body-link">“FINISH HIM!” - Mortal Kombat</span>
            </td>
          </tr>
          <tr>
            <td>.body-medium</td>
            <td>
              <span className="body-medium">
                “It’s a-me, Mario!” - Super Mario
              </span>
            </td>
          </tr>
          <tr>
            <td>.body-bold</td>
            <td>
              <span className="body-bold">
                “You were almost a Jill sandwich!” - Resident Evil
              </span>
            </td>
          </tr>
          <tr>
            <td>.footnote-primary</td>
            <td>
              <span className="footnote-primary">
                "Kupó! Kupó! Kupopó!" - Final Fantasy IX
              </span>
            </td>
          </tr>
          <tr>
            <td>.footnote-error</td>
            <td>
              <span className="footnote-error">
                "Get ready for the next battle!" - Tekken
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
