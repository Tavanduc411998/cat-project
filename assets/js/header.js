export default function Header() {
  return `
            <div class="header-navbar">
                <div class="logo">
                    <img src="/assets/img/logo.png" alt="Logo">
                </div>
                <ul class="nav-list">
                    <li class="nav-item">
                        <a href="#about-section">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="#partner-section">Partner</a>
                    </li>
                    <li class="nav-item">
                        <a href="">Tokenomic</a>
                    </li>
                    <li class="nav-item">
                        <a href="">Roadmap</a>
                    </li>
                </ul>
                <div class="contact"></div>
            </div>

            <div class="header-banner">
                <div class="banner-content">
                    <h2>Welcome to</h2>
                    <h2>$Mooncat</h2>
                    <p>Where decentralized finance meets cute charm! $Mooncat is not just a token; it's an immersive
                        experience designed to bring joy, laughter, and rewards to the Solana blockchain. Embrace the
                        playful spirit of the beloved $Mooncat character as we embark on an adventure into the world of
                        decentralized fun.</p>
                    <div class="banner-btn">
                        <button class="main-btn">Telegram
                            <i class="fa-brands fa-telegram"></i>
                        </button>
                        <button class="sub-btn">Twitter
                            <i class="fa-brands fa-x-twitter"></i>
                        </button>
                    </div>
                </div>
                <div class="banner-img">
                    <img src="/assets/img/cat-1.png" alt="Cat">
                </div>
            </div>
  `;
}
