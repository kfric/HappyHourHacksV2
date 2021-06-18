import React from 'react'
import 'bulma/css/bulma.min.css'

export function SignIn() {
  return (
    <>
      <div className="container ">
        <div className="notification is-primary has-text-centered is-size-3">
          Happy Hour Hacks
        </div>
      </div>
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-15-touch is-6-tablet is-6-desktop">
                <form action=" className='box">
                  <div className="field">
                    <label htmlFor="" className="label">
                      Username
                      <div className="control">
                        <input
                          type="email"
                          placeholder="e.g. tom.s@gmail.com"
                          className="input"
                          required
                        />
                      </div>
                    </label>
                    <label htmlFor="" className="label">
                      Password
                      <div className="control">
                        <input
                          type="password"
                          placeholder="*****"
                          className="input"
                          required
                        />
                      </div>
                    </label>
                    <div class="field">
                      <button class="button is-success">Login</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <section class="hero">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-centered">
              <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                <form action="" class="box">
                  <div class="field">
                    <label for="" class="label">
                      Username
                    </label>
                    <div class="control has-icons-right">
                      <input
                        type="email"
                        placeholder="e.g. bobsmith@gmail.com"
                        class="input"
                        required
                      />
                      <span class="icon is-small is-right">
                        <i class="fa fa-envelope"></i>
                      </span>
                    </div>
                  </div>
                  <div class="field">
                    <label for="" class="label">
                      Password
                    </label>
                    <div class="control has-icons-right">
                      <input
                        type="password"
                        placeholder="*******"
                        class="input"
                        required
                      />
                      <span class="icon is-small is-right">
                        <i class="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div class="field">
                    <button class="button is-success">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default SignIn
