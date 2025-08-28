const STYLES = `
  ul.rm-ul {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-flow: column;
    max-width: 720px;
    margin-top: 1em;
    margin-bottom: 1em;
    padding-left: 2rem;
    display: flex;
  }

  li.rm-li {
    padding-left: .5em;
    display: list-item;
    text-align: left;
    box-sizing: border-box;
  }

  p.sales-only-focus {
    color: #4b5563;
    margin-top: 0;
    margin-bottom: 0;
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;
    text-decoration: none;
  }

  .rm-comm-container {
    grid-row-gap: 64px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 1132px;
    margin-left: 2rem;
    margin-right: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex;
    position: relative;
  }

  .rm-h3 {
    color: #000;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 28px;
    font-weight: 800;
  }

  .rm-card-container {
    grid-column-gap: 2rem;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    display: flex;
    position: relative;

    .card {
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;
      border-radius: 1rem;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      padding: 2rem;
      display: flex;
      box-shadow: 0 10px 15px #0000001a, 0 4px 6px #0000001a;
    }
  }

  .card-content-container {
    grid-row-gap: 1rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    text-decoration: none;
    display: flex;
  }

  .card-title-container {
    color: #000;
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 800;
  }

  .icon-container {
    border: 0 solid #e5e7eb;
  }

  .icon-wrap {
    background-color: #15dad51a;
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    padding: 1rem;
    display: flex;
  }

  .rm-button {
    background-color: #15dad5;
    border-radius: .5rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 2.5rem;
    font-size: 1rem;
    font-weight: 800;
    display: flex;
    position: relative;
    box-shadow: 0 4px 6px #0000001a, 0 2px 4px #0000001a;
  }
`;

const HTML_CONTENT = `
  <div class="rm-comm-container">
    <h3 class=rm-h3>One Community, Three Ways to Hire</h3>

    <div class=rm-card-container>
      <div class=card>
        <div class=card-content-container>
          <div class=icon-container>
            <div class=icon-wrap>
              <img src=img1 alt="img1" />
            </div>
            <h4 class=card-title-container>Reach our active community of sellers</h4>
            <ul style=rm-ul>
              <li style=rm-li><p class=sales-only-focus>Sales-only focus</p></li>
              <li style=rm-li><p class=sales-only-focus>Promoted to our Newsletter and Alerts</p></li>
              <li style=rm-li><p class=sales-only-focus>Free to post</p></li>
            </ul>
          </div>

          <a class=rm-button href="https://jobs.rainmakers.co/">
            Post a Job
          </a>
        </div>
      </div>
      <div class=card>
        <div class=card-content-container>
          <div class=icon-container>
            <div class=icon-wrap>
              <img src=img2 alt="img2" />
            </div>
            <h4 class=card-title-container>Source Curated Salepeople</h4>
            <ul style=rm-ul>
              <li style=rm-li><p class=sales-only-focus>Self-serve access</p></li>
              <li style=rm-li><p class=sales-only-focus>Filter by Experience</p></li>
              <li style=rm-li><p class=sales-only-focus>From $750/Month</p></li>
            </ul>
          </div>
          <a class=rm-button href="https://jobs.rainmakers.co/">
            Join Now
          </a>
        </div>
      </div>
      <div class=card>
        <div class=card-content-container>
          <div class=icon-container>
            <div class=icon-wrap>
              <img src=img3 alt="img3" />
            </div>
            <h4 class=card-title-container>Let Our Experts Deliver Your Next Sales Hire</h4>
            <ul style=rm-ul>
              <li style=rm-li><p class=sales-only-focus>Full-cycle recruiting</p></li>
              <li style=rm-li><p class=sales-only-focus>Done entirely for you</p></li>
              <li style=rm-li><p class=sales-only-focus>Custom search and pricing</p></li>
            </ul>
          </div>

          <a class=rm-button href="mailto:sales@rainmakers.co">
            Talk to an Expert
          </a>
        </div>
      </div>
    </div>
  </div>
`;

console.log("script is running");
window.onload = (event) => {
  console.log("page is fully loaded");
  console.log(window.location.href);
  //if (window.location.href.includes("https://spyjobboard.niceboard.co/employer")) {
    const style = document.createElement("style");
    style.textContent = STYLES;
    document.head.appendChild(style);


    document
      .getElementsByClassName("inner")
      .item(2)
      .innerHTML = HTML_CONTENT;
  //}
};
