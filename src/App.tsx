import "./App.css";

function App() {
  return (
    <div className='app'>
      <h3 className='text-center'>
        Privacy Policy for the
        <br /> Chrome Extension
      </h3>
      <h1 className='text-center'>
        <a
          href='https://chromewebstore.google.com/detail/ruler/mnkiojfbiobgookemgaggoojpcfcknmb'
          target='_blank'
        >
          Ruler
        </a>
      </h1>
      <p>
        <b>19th of March, 2025</b>
      </p>
      <div className='text-justify'>
        Thank you for choosing the Ruler Extension. This Privacy Policy explains
        how we handle your data when you use our extension.
        <ol>
          <li>
            <b>Data Collection and Storage</b>
            <ul>
              <li>
                <b>Local Storage Only:</b> The extension uses only&nbsp;
                <i>the local storage</i> of the browser to store user
                preferences, which are
                <ul>
                  <li>the status whether to show/hide the ruler, </li>
                  <li>the status whether the precise mode is on/off,</li>
                  <li>diagonal of the desktop the user is using</li>
                  <li>primary unit of the ruler,</li>
                  <li>primary unit step of the ruler,</li>
                  <li>the status whether to show/hide the secondary unit,</li>
                  <li>secondary unit step of the ruler,</li>
                  <li>background color of the ruler,</li>
                  <li>text and outline color of the ruler,</li>
                  <li>rotation degree of the ruler.</li>
                </ul>
              </li>
              <li>
                <b>No External Transmission:</b> All data is stored locally on
                your device. We do not transmit, collect, or share any of your
                information with external servers or third parties.
              </li>
            </ul>
          </li>

          <li>
            <b>Use of Data</b>
            <ul>
              <li>
                <b>Enhancing User Experience:</b> The data stored is used
                exclusively to provide user with a personalized and consistent
                experience each time you use the extension.
              </li>
              <li>
                <b>No Personal Data Collection:</b> We do not collect any
                personal or sensitive information from the user. The stored
                settings are strictly for functionality purposes.
              </li>
            </ul>
          </li>

          <li>
            <b>Data Security and Deletion</b>
            <ul>
              <li>
                <b>User Control:</b> Since all data is stored locally, you have
                complete control over your settings. Uninstalling the extension
                will remove all locally stored data.
              </li>
              <li>
                <b>Security Measures:</b> While we implement measures to ensure
                data integrity within the local storage environment, please be
                aware that data stored on your device is also subject to your
                own device’s security protocols.
              </li>
            </ul>
          </li>

          <li>
            <b>Changes to This Privacy Policy</b>
            <ul>
              <li>
                <b>Policy Updates:</b> We may update this Privacy Policy from
                time to time. Any changes will be posted on this page with an
                updated effective date. We encourage you to review this policy
                periodically.
              </li>
            </ul>
          </li>

          <li>
            <b>Contact Us</b>
            <ul>
              <li>
                <b>Questions or Concerns:</b> If you have any questions,
                concerns about this Privacy Policy or suggestions for the
                Extension, please contact the developer, Michael Navasardyan.
                <br />
                Email:{" "}
                <a href='mailto:navasardianmichael@gmail.com'>
                  navasardianmichael@gmail.com
                </a>
              </li>
            </ul>
          </li>
        </ol>
        <p>
          Install the extension here:{" "}
          <a
            href='https://chromewebstore.google.com/detail/ruler/mnkiojfbiobgookemgaggoojpcfcknmb'
            target='_blank'
          >
            https://chromewebstore.google.com/detail/ruler/mnkiojfbiobgookemgaggoojpcfcknmb
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
