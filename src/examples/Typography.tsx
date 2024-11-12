import './Typography.scss'

export function Typography(): React.JSX.Element {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>h1</td>
            <td>
              <h1>&quot;Waka Waka Waka&quot; - Pacman</h1>
            </td>
          </tr>
          <tr>
            <td>h2</td>
            <td>
              <h2>&quot;Do a barrel roll!&quot; - Star Fox 64</h2>
            </td>
          </tr>
          <tr>
            <td>h3</td>
            <td>
              <h3>&quot;Kept you waiting, huh?&quot; - MGS</h3>
            </td>
          </tr>
          <tr>
            <td>h4</td>
            <td>
              <h4>&quot;Hey! Look! Listen!&quot; - TLoZ</h4>
            </td>
          </tr>
          <tr>
            <td>.body-regular-primary</td>
            <td>
              <span className="body-regular-primary">
                &quot;Endure and survive.&quot; - The Last of Us
              </span>
            </td>
          </tr>
          <tr>
            <td>.body-regular-secondary</td>
            <td>
              <span className="body-regular-secondary">
                &quot;A famous explorer once said that the extraordinary is in
                what we do, not who we are.&quot; - Tomb Raider
              </span>
            </td>
          </tr>
          <tr>
            <td>.body-regular-error</td>
            <td>
              <span className="body-regular-error">
                &quot;Praise the sun!&quot; - Dark Souls
              </span>
            </td>
          </tr>
          <tr>
            <td>.body-regular-warning</td>
            <td>
              <span className="body-regular-warning">
                &quot;You’ve met with a terrible fate, haven’t you?&quot; - TLoZ
              </span>
            </td>
          </tr>
          <tr>
            <td>.body-regular-disabled</td>
            <td>
              <span className="body-regular-disabled">
                &quot;Whatever.&quot; - Final Fantasy VIII
              </span>
            </td>
          </tr>
          <tr>
            <td>.body-underline</td>
            <td>
              <span className="body-underline">
                &quot;Nothing is true, everything is permitted.&quot; -
                Assassin’s Creed
              </span>
            </td>
          </tr>
          <tr>
            <td>.body-link</td>
            <td>
              <span className="body-link">
                &quot;FINISH HIM!&quot; - Mortal Kombat
              </span>
            </td>
          </tr>
          <tr>
            <td>.body-medium</td>
            <td>
              <span className="body-medium">
                &quot;It’s a-me, Mario!&quot; - Super Mario
              </span>
            </td>
          </tr>
          <tr>
            <td>.body-bold</td>
            <td>
              <span className="body-bold">
                &quot;You were almost a Jill sandwich!&quot; - Resident Evil
              </span>
            </td>
          </tr>
          <tr>
            <td>.footnote-primary</td>
            <td>
              <span className="footnote-primary">
                &quot;Kupó! Kupó! Kupopó!&quot; - Final Fantasy IX
              </span>
            </td>
          </tr>
          <tr>
            <td>.footnote-error</td>
            <td>
              <span className="footnote-error">
                &quot;Get ready for the next battle!&quot; - Tekken
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
