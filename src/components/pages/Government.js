import React from 'react';
import './css/Government.css';

function Government() {
return (

    <div className="container">
        <div className='card mt-4 '>
            <div className='card-body'>
            <div className="government-page">
      {/*<header className="gov-header">
        <h1>Welcome to Your Government Guide</h1>
        <p>Learn about the branches of government, their roles, election processes, and how they work together to serve our country.</p>
</header> */}

      <section className="gov-section">
        <h2>Introduction to the Branches of Government</h2>
        <p>Our government is divided into three branches: Legislative, Executive, and Judicial. Each plays a vital role in maintaining balance and preventing any single branch from having too much power.</p>
      </section>

      {/* Legislative Branch Section */}
      <section className="gov-section branch-section">
        <h2>Legislative Branch</h2>
        <p>The Legislative Branch, represented by Congress, makes laws. It consists of the Senate and the House of Representatives:</p>
        <ul>
          <li><strong>The Senate</strong> - Each state elects two senators who serve six-year terms. Senate elections are staggered so that approximately one-third of the seats are up for election every two years.</li>
          <li><strong>The House of Representatives</strong> - Representatives are elected to two-year terms, with elections held every even-numbered year. The number of representatives from each state is based on population.</li>
        </ul>

        {/* Infographic Section */}
        <div className="infographic">
          <img src="https://miro.medium.com/v2/resize:fit:625/1*zCaLMn5eqKpd-JH_Dbos4Q.png" alt="Legislative Branch Infographic" />
          <p>Infographic explaining the process of creating and passing laws in Congress.</p>
        </div>

        {/* Video Embed */}
        <div className="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/66f4-NKEYz4?si=vz13QrZezcKJ-qDB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>

      {/* Executive Branch Section */}
      <section className="gov-section branch-section">
        <h2>Executive Branch</h2>
        <p>The Executive Branch enforces laws and is led by the President and Vice President. Presidential elections occur every four years through an electoral college system.</p>

        <ul>
          <li><strong>President</strong> - Elected to a four-year term, with a maximum of two terms.</li>
          <li><strong>Vice President</strong> - Runs alongside the President and serves the same term length.</li>
        </ul>

        {/* Infographic Section */}
        <div className="infographic">
          <img src="https://ecdn.teacherspayteachers.com/thumbitem/Executive-Branch-Poster-10131436-1729986626/original-10131436-1.jpg" alt="Executive Branch Infographic" />
          <p>Infographic illustrating the presidential election process, including primaries, conventions, and the general election.</p>
        </div>

        {/* Video Embed */}
        <div className="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5l02sK5LovI?si=t9x5WP8kzImeuqUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>

      {/* Judicial Branch Section */}
      <section className="gov-section branch-section">
        <h2>Judicial Branch</h2>
        <p>The Judicial Branch interprets laws and ensures they are applied fairly. Federal judges, including Supreme Court justices, are appointed rather than elected.</p>

        <ul>
          <li><strong>Supreme Court Justices</strong> - Appointed by the President and confirmed by the Senate, justices serve lifetime terms.</li>
          <li><strong>Lower Federal Courts</strong> - Judges are similarly appointed for lifetime terms to maintain impartiality.</li>
        </ul>

        {/* Infographic Section */}
        <div className="infographic">
          <img src="https://resourcesforhistoryteachers.pbworks.com/f/1555869381/Screen%20Shot%202019-04-21%20at%201.55.37%20PM.png" alt="Judicial Branch Infographic" />
          <p>Infographic showing the structure of the judicial system and the process of judicial review.</p>
        </div>

        {/* Video Embed */}
        <div className="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/mXw-hEB263k?si=IzZfnUm5og1p9gm9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="gov-section conclusion">
        <h2>Working Together to Govern</h2>
        <p>Each branch has unique powers but checks the others to maintain balance. This ensures the government operates fairly and serves the people.</p>
      </section>
    </div>
            </div>
        </div>
    </div>
);
}
export default Government;