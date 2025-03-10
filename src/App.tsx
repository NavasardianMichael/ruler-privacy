import "./App.css";

function App() {
  return (
    <div className="app">
      <h3 className="text-center">
        Privary Policy for the
        <br /> Chrome Extension
      </h3>
      <h1 className="text-center">Ruler</h1>
      <p>
        <b>3rd of March, 2025</b>
      </p>
      <div className="text-justify">
        Thank you for choosing the Ruler Extension. This Privacy Policy explains
        how we handle your data when you use our extension.
        <ol>
          <li>
            <b>Data Collection and Storage</b>
            <ul>
              <li>
                <b>Local Storage Only:</b> The extension uses &nbsp;
                <i>chrome.storage.local</i> solely to store user preferences,
                such as the last position, sizing, and color settings of the
                ruler.
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
                exclusively to provide you with a personalized and consistent
                experience each time you use the extension.
              </li>
              <li>
                <b>No Personal Data Collection:</b> We do not collect any
                personal or sensitive information from you. The stored settings
                are strictly for functionality purposes.
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
                <a href="mailto:navasardianmichael@gmail.com">
                  navasardianmichael@gmail.com
                </a>
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
