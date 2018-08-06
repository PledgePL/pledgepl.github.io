import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./section-why-pledge-tiles.scss";
import BlockGrid from "../../../molecules/block-grid/block-grid";
import WhyTile from "../../tiles/why-tile/why-tile";
import BenefitLayout from "../../../molecules/layouts/benefit-layout/benefit-layout";
import QuoteLayout from "../../../molecules/layouts/quote-layout/quote-layout";
import ImageTileLayout from "../../../molecules/layouts/image-tile-layout/image-tile-layout";

const SectionWhyPledgeTiles = props => (
  <section className="section-why-pledge-tiles">
    <div className="section-why-pledge-tiles__content">
      <div className="section-why-pledge-tiles__content__body">
        <BlockGrid xsCols={1} smCols={1} mdCols={2} lgCols={3} gutter={0}>
          <WhyTile type="beta">
            <BenefitLayout title="Good For Our Industry" icon="lightbulb">
              The creative sector traditionally has one of the worst work/life
              balances. When your company joins The Pledge, you help us break
              that horrible mold, and forging a new generation of creative
              companies that put our employees (and their families) first, not
              our clients.
            </BenefitLayout>
          </WhyTile>
          <WhyTile>
            <QuoteLayout
              quote="Pledge Parental Leave is a hugely important movement for the US creative industry that will help not only individuals and families but companies and society at large."
              name="Jules Ehrhardt"
              title="Co-Founder, Pledge Parental Leave"
              ariaTitle="Co-Owner, Us Two"
              src="/static/avatars/jules-ehrhardt.jpg"
              quoteDirection="left"
              quoteType={null}
            />
          </WhyTile>
          <WhyTile type="gamma">
            <QuoteLayout
              quote="Parental leave is extremely important to us for the health and wellbeing of our employees. Expanding your family is a moment of enormous change, especially in the beginning, and we want to make sure we provide time for mental and physical healing, bonding, and adjustment. Providing ample paid leave is our way of supporting our employees in this crucial time."
              name="David Eisenman"
              title="CEO &amp; Co-Founder Madwell"
              src="/static/avatars/daniel-eisenman.jpg"
              quoteDirection="right"
              quoteType="gamma"
            />
          </WhyTile>
          <WhyTile type="alpha" padding={0}>
            <ImageTileLayout src="/static/photos/outdoor-vibes.jpg" alt="" />
          </WhyTile>
          <WhyTile type="beta">
            <BenefitLayout title="Good For Your Company" icon="building">
              As it gets harder to recruit amazing talent, ping pong &amp; free
              snacks only get you so far. By joining The Pledge, you’re breaking
              the status quo, differentiating yourself in the recruitment
              marketplace, and establishing your company as a progressive,
              forward-thinking diamond in the ruff.
            </BenefitLayout>
          </WhyTile>
          <WhyTile>
            <QuoteLayout
              quote="For us, a great Parental Leave policy is a core investment in our company culture. At Doberman, we expect our people to be on the very top of creativity and innovation. That is why well-being and work/life balance becomes the single most important piece of a sustainable business model."
              name="Anders Frostenson"
              src="/static/avatars/anders-frostenson.jpg"
              title="Managing Director, Doberman"
              quoteDirection="right"
              quoteType={null}
            />
          </WhyTile>
          <WhyTile type="gamma">
            <QuoteLayout
              quote="We think that it’s incredibly important to support our people throughout the major transitions in their lives - a strong parental leave policy is a foundation for a human-centered company. In our experience, if employees feel supported and enabled in their lives, the business impact will naturally follow."
              name="Duane Bray"
              src="/static/avatars/duane-bray.jpg"
              title="Partner, IDEO"
              quoteDirection="left"
              quoteType="beta"
            />
          </WhyTile>
          <WhyTile type="alpha" padding={0}>
            <ImageTileLayout src="/static/photos/cli.jpg" alt="" />
          </WhyTile>
          <WhyTile type="beta">
            <BenefitLayout title="Good For Your Employees" icon="people">
              Your employees are the most valuable asset your business can have,
              you spend thousands recruiting and onboarding them, so why
              wouldn’t you do everything possible to keep them? Joining The
              Pledge is great for morale, employee retention, and your company’s
              reputation.
            </BenefitLayout>
          </WhyTile>
          <WhyTile>
            <QuoteLayout
              quote="As a proud founding partner of this initiative, we look forward to more organizations recognizing that better arrangements for working parents can deliver extraordinarily positive social and business impact over the long term."
              name="Richard Whitehall"
              src="/static/avatars/richard-whitehall.jpg"
              title="Executive Director and Partner, Smart Design"
              quoteDirection="right"
              quoteType={null}
            />
          </WhyTile>
          <WhyTile type="gamma">
            <QuoteLayout
              quote="When you're starting a company and looking for talent, It's not just about ping pong tables and free snacks. When it comes to recruiting, showing your current and potential employees that you're serious about investing in them and their families is crucial from the outset."
              name="John Borthwick"
              src="/static/avatars/john-borthwick.jpg"
              title="CEO, Betaworks"
              quoteDirection="left"
              quoteType="gamma"
            />
          </WhyTile>
          <WhyTile type="alpha" padding={0}>
            <ImageTileLayout src="/static/photos/_R9Q2898.jpg" alt="" />
          </WhyTile>
        </BlockGrid>
      </div>
    </div>
  </section>
);

export default withStyles(s)(SectionWhyPledgeTiles);
