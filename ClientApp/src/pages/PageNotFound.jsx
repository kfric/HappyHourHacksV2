import { useHistory } from 'react-router-dom'

export function PageNotFound() {
  const history = useHistory()
  return (
    <div>
      <section className="hero is-fullheight">
        <div className="notification is-primary has-text-centered is-size-3">
          Happy Hour Hacks
        </div>
        <div className="has-text-centered is-size-4">404 Not Found</div>
        <div className="container">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column">
                  <form action=" className='box">
                    <div className="field has-text-centered">
                      Nothing here...
                    </div>
                    <div
                      className="button is-large is-link m-6"
                      onClick={function () {
                        history.goBack()
                      }}
                    >
                      Return to last page
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PageNotFound
