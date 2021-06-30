import { useHistory } from 'react-router-dom'

export function PageNotFound() {
  const history = useHistory()
  return (
    <div>
      <section className="hero is-fullheight">
        <div className="hero is-primary has-text-centered is-size-1 has-text-weight-bold p-5 is-family-secondary">
          Happy Hour Hacks
        </div>
        <div className="has-text-centered is-size-4 has-text-white mt-5">
          404 Not Found
        </div>
        <div className="container">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column">
                  <form action=" className='box">
                    <div className="field has-text-centered has-text-white">
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
