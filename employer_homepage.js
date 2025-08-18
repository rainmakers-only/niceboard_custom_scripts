const STYLES = `
  .how-it-works {
    background: #fff;
    padding-bottom: 50px;
  }
  .container {
    display: block;
    height: auto;
    margin: 0 auto;
    margin-top: 100px;
    max-width: 1132px;
    overflow: hidden;
    padding: 0px 24px;
    position: relative;
    width: 100%;
  }
  .title {
    font-size: 28px;
    font-weight: 700;
    margin: 64px 0;
    text-align: center;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding-bottom: 20px;

    .column {
      flex: 1;
      padding-left: 12px;
      padding-right: 12px;
    }
  }

  .block {
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.15);

    display: flex;
    flex-direction: column;
    font-size: 0.9em;
    gap: 20px;
    height: 100%;
    justify-content: space-between;
    line-height: 2;
    overflow: hidden;
    padding: 20px;
    position: relative;
    width: 100%;

    h4 {
      font-size: 1.3em;
      line-height: 1.5;
      text-align: left;
    }

    .image-wrapper {
      align-items: center;
      background-color: #15dad51a;
      border-radius: 1rem;
      display: flex;
      height: 4rem;
      justify-content: center;
      padding: 1rem;
      width: 4rem;

      img {
        background-color: #15dad51a;
      }
    }

    ul {
      line-height: 2.5;
      padding-left: 20px;
    }
  }

  .step-title {
    font-size: 20px;
    margin-bottom: 16px;
    text-align: center;
  }

  .request {
    background-color: #15dad5;
    border-radius: 10px;
    color: #fff;
    display: block;
    font-size: 15px;
    font-weight: 600;
    padding: 5px;
    text-align: center;
    width: auto;
    &:hover,
    &:active {
      box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.15), 0 2px 1px 0 rgba(0, 0, 0, 0.1);
    }
  }
`;

const HTML_CONTENT = `
  <div id="one-community-three-ways" class="how-it-works" style="background: #fff; padding-bottom: 50px;">
    <div class="container">
      <h3 class=title>One Community, Three Ways to Hire</h3>

      <div class=wrapper>
        <div class=column>
          <div class=block>
            <div>
              <div class=image-wrapper>
                <img src="https://d27ykm5ra2p4nd.cloudfront.net/dist/assets/hero-02.2f75af2b.jpg
" alt="img1" />
              </div>
              <h4 class=step-title>Reach our active community of sellers</h4>
              <ul>
                <li>Sales-only focus</li>
                <li>Promoted to our Newsletter and Alerts</li>
                <li>Free to post</li>
              </ul>
            </div>

            <a class=request href="https://jobs.rainmakers.co/">
              Post a Job
            </a>
          </div>
        </div>
        <div class=column>
          <div class=block>
            <div>
              <div class=image-wrapper>
                <img src=img2 alt="img2" />
              </div>
              <h4 class=step-title>Source Curated Salepeople</h4>
              <ul>
                <li>Self-serve access</li>
                <li>Filter by Experience</li>
                <li>From $750/Month</li>
              </ul>
            </div>
            <a class=request href="https://jobs.rainmakers.co/">
              Join Now
            </a>
          </div>
        </div>
        <div class=column>
          <div class=block>
            <div>
              <div class=image-wrapper>
                <img src=img3 alt="img3" />
              </div>
              <h4 class=step-title>Let Our Experts Deliver Your Next Sales Hire</h4>
              <ul>
                <li>Full-cycle recruiting</li>
                <li>Done entirely for you</li>
                <li>Custom search and pricing</li>
              </ul>
            </div>

            <a class=request href="mailto:sales@rainmakers.co">
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

console.log("script is running");
window.onload = (event) => {
  console.log("page is fully loaded");
  console.log(document.getElementsByClassName("inner").item(2));


  const style = document.createElement("style");
  style.textContent = STYLES;
  document.head.appendChild(style);

  document
    .getElementsByClassName("inner")
    .item(2)
    .innerHTML = HTML_CONTENT;
};

