
import './style.css';

function App() {
  return (
    <>
    <header>
  <h1>Khalfaoui Aziz</h1>
  <ul className="navmenu">
    <li><a href="#">About</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</header>
<section id="about-me">
  <h1>
    Hello, my name is
    <span className="rotate text-important">Khalfaoui Aziz</span>,<br></br>
    and i make horrible websites.
  </h1>
  <img className="avatar" src="aziz.jpg" alt="Khalfaoui Aziz" />
</section>
<section id="projects">
  <h2 className="text-important">Projects</h2>
  <div className="projects-container">
    {/*Project Card */}
    <div className="project-card">
      <img src="react.jpg" alt="project" />
      <h3>Project 1</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
        aliquam.
      </p>
      <p><a href="#">Github Link</a></p>
    </div>
    {/*Project Card */}
    <div className="project-card">
      <img src="logo192.png" alt="project" />
      <h3>Project 2</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
        aliquam.
      </p>
      <p><a href="#">Github Link</a></p>
    </div>
    {/*Project Card */}
    <div className="project-card">
      <img src="react1.png" alt="project" />
      <h3>Project 3</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
        aliquam.
      </p>
      <p><a href="#">Github Link</a></p>
    </div>
    {/*Project Card */}
    <div className="project-card">
      <img src="logo512.png" alt="project" />
      <h3>Project 4</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
        aliquam.
      </p>
      <p><a href="#">Github Link</a></p>
    </div>
  </div>
</section>
<section id="contact">
  <h2 className="text-important">contact me</h2>
  <form>
    <label>Full Name</label>
    <input type="text" placeholder="Email" />
    <label>Email</label>
    <input type="email" placeholder="Email" />
    <label>Message</label>
    <textarea rows="5" cols="40"></textarea>
    <button>Send</button>
  </form>
</section>
<footer>
  <p>Copyritghts &copy; GOMYCODE 2020</p>
</footer>
  </>
  );
}

export default App;
