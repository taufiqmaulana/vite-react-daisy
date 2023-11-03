import Logo from "./assets/react.svg";


function QuickCard({ imgPosition }: { imgPosition: string }) {
  return (
    <div className="card card-side bg-base-100 shadow-sm hover:shadow-xl transition-shadow ease-in-out">
      <figure>
        <div style={{
          width: 180,
          height: 180,
          backgroundSize: "550px auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: imgPosition,
          backgroundImage: "url(https://i.pinimg.com/564x/12/9f/aa/129faa94601828afcff81d55328ef966.jpg)"
        }} />
      </figure>
      <div className="card-body">
        <h3 className="card-title">New movie is released!</h3>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  )
}

function App() {

  return (
    <div className="flex h-full">
      <div className="flex-1 flex flex-col">
        <div className="navbar bg-base-200 flex-none">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">cP</a>
            <ul className="menu menu-horizontal px-1">
              <li><a>Link</a></li>
              <li>
                <details>
                  <summary>
                    Parent
                  </summary>
                  <ul className="p-2 bg-base-100">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>
                    Parent
                  </summary>
                  <ul className="p-2 bg-base-100">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="flex-none">
            <div className="indicator mr-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>

            <div className="dropdown dropdown-end mr-3">
              <div tabIndex={0} className="flex" style={{ alignItems: "center" }}>
                <div className="text-right text-base mr-2" style={{ lineHeight: 1 }}>
                  <p className="font-bold text-slate-700">Taufiq Maulana</p>
                  <small className="text-slate-500">Software Engineer</small>
                </div>
                <label className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://i.pinimg.com/564x/cf/df/3c/cfdf3ca21215622a11ec97501f86df84.jpg" />
                  </div>
                </label>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-base-200 overflow-y-auto">
          <div className="container mx-auto p-16 pt-0">
            <article className="prose mb-8">
              <h1>Welcome, Taufiq</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </article>
            <div className="grid grid-cols-2 gap-8 mt-16">
              <QuickCard imgPosition="-14px -135px" />
              <QuickCard imgPosition="-185px -135px" />
              <QuickCard imgPosition="-355px -135px" />
              <QuickCard imgPosition="-14px -305px" />
            </div>
            <div className="stats shadow place-items-center flex mt-16">

              <div className="stat place-items-center">
                <div className="stat-title">Downloads</div>
                <div className="stat-value">31K</div>
                <div className="stat-desc">From January 1st to February 1st</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title">Users</div>
                <div className="stat-value">4,200</div>
                <div className="stat-desc">↗︎ 40 (2%)</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title">New Registers</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
              </div>

            </div>
            <div className="divider mt-16">APPS</div>
            <div className="uppercase text-gray-400 font-extrabold text-xl mt-8">
              <div className="slider">
                <div className="slide-track">
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                </div>
              </div>

              <div className="slider">
                <div className="slide-reverse slow">
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                </div>
              </div>

              <div className="slider">
                <div className="slide-track slow">
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                  <div className="slide">APP</div>
                </div>
              </div>
            </div>
            <footer className="footer p-10 bg-neutral text-neutral-content mt-16">
              <aside>
                <img src={Logo} width={50} />
                <p>Company Name
                <br />Company Slogan or Jargon.
                <br />{new Date().getFullYear()}
                </p>
              </aside>
              <nav>
                <header className="footer-title">Integration</header>
                <a className="link link-hover">Wekan</a>
                <a className="link link-hover">Gitlab</a>
                <a className="link link-hover">Exchange</a>
              </nav>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
