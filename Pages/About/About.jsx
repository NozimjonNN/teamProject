import React from 'react';
import Fade from 'react-reveal/Fade';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <Fade bottom>
        <h2>About the Water Crisis in Uzbekistan</h2>
        <p>
          Uzbekistan faces a critical water shortage driven by environmental, agricultural, and geopolitical challenges. With its dry
          climate, the country relies heavily on rivers like the Amu Darya and Syr Darya, which are shared with neighboring countries
          and often subject to disputes. Climate change, water mismanagement, and high agricultural demand have further exacerbated
          the situation, leading to severe water scarcity in many regions.
        </p>
      </Fade>

      <Fade bottom>
        <h3>Key Issues</h3>
        <ul>
          <li>
            <strong>Heavy Agricultural Usage:</strong> Agriculture consumes over 90% of Uzbekistan's water resources, primarily for
            cotton production. Unfortunately, outdated irrigation methods result in large amounts of water loss.
          </li>
          <li>
            <strong>Environmental Impact:</strong> Rising temperatures due to climate change are causing increased evaporation and
            shrinking water bodies, especially in the Aral Sea, one of the world's most dramatic environmental disasters.
          </li>
          <li>
            <strong>Geopolitical Conflicts:</strong> Water disputes with neighboring countries, particularly over the Amu Darya and Syr
            Darya rivers, impact water distribution and contribute to regional tensions.
          </li>
        </ul>
      </Fade>

      <Fade bottom>
        <h3>Solutions & Future Directions</h3>
        <p>
          A sustainable approach to Uzbekistan’s water crisis requires modernized practices, cooperation, and policy reform. Here are
          some proposed solutions:
        </p>
        <ul>
          <li>
            <strong>Improved Irrigation Systems:</strong> Implementing drip and sprinkler irrigation can significantly reduce water
            wastage and increase efficiency.
          </li>
          <li>
            <strong>Crop Diversification:</strong> Encouraging farmers to adopt drought-resistant and water-efficient crops helps reduce
            water dependency on high-demand crops like cotton.
          </li>
          <li>
            <strong>Renewable Desalination Projects:</strong> Exploring renewable energy for water desalination near the Aral Sea and
            other affected regions could provide an alternative water source for local communities.
          </li>
          <li>
            <strong>International Cooperation:</strong> Collaborating with neighboring countries to develop shared water management
            strategies and treaties can promote fair distribution and long-term stability.
          </li>
        </ul>
      </Fade>

      <Fade bottom>
        <h3>Impact on Local Communities</h3>
        <p>
          The water crisis affects local communities by limiting access to clean water, reducing agricultural productivity, and causing
          health issues. Families and farmers in rural areas are particularly vulnerable, as they depend on stable water supplies for
          both personal use and livelihood. Addressing these issues is essential for ensuring the well-being of Uzbekistan’s
          population and environment.
        </p>
      </Fade>

      <Fade bottom>
        <h3>Did You Know?</h3>
        <p>
          <em>The Aral Sea, once one of the largest lakes in the world, has nearly disappeared due to overuse of water resources for irrigation,
          leaving behind a desert known as the Aralkum. This environmental disaster has impacted both ecosystems and communities around
          the region.</em>
        </p>
      </Fade>
    </section>
  );
};

export default About;
