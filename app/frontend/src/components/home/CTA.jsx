import React from "react";

const CTA = () => {
  return (
    <section class="call-to-action overly bg-3 section-sm">
      <div class="container">
        <div class="row justify-content-md-center text-center">
          <div class="col-md-8">
            <div class="content-holder">
              <h2>Start today to get more exposure and grow your business</h2>
              <ul class="list-inline mt-30">
                <li class="list-inline-item">
                  <a class="btn btn-main" href="ad-listing.html">
                    Add Listing
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="btn btn-secondary" href="category.html">
                    Browser Listing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;