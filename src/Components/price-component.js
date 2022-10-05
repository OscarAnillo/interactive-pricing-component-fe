export default function PriceComponent(){
    return (
        <div className="price">
            <div className="price-div">
            <h2>100K Pageviews</h2>
                <div className="desktop-row">
                    <div>
                        <h2>100K Pageviews</h2>
                    </div>
                    <div>
                        <h1>$16.00</h1>
                    </div>
                    <div>
                        <p>/ month</p>
                    </div>
                </div>
                <input type="range" className="range" />
                <div className="price-row">
                    <div>
                        <h1>$16.00</h1>
                    </div>
                    <div>
                        <p className="month">/ month</p>
                    </div>
                </div>
                <div className="price-row">
                    <div>
                        <p>Monthly Billing</p>
                    </div>
                    <div>
                        <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <p>Yearly Billing <span className="discount">-25%</span></p>
                    </div>
                    <div>
                        <span className="discount-desktop">25% discount</span>
                    </div>
                </div>
            </div>
            <div className="checks">
                <div>
                <div>
                    <img src="/images/icon-check.svg" alt="" />
                    <span>Unlimited websites</span>
                </div>
                <div>
                    <img src="/images/icon-check.svg" alt="" />
                    <span>100% data ownership</span>
                </div>
                <div>
                    <img src="/images/icon-check.svg" alt="" />
                    <span>Email reports</span>
                </div>
            </div>
                <button>Start my trial</button>
            </div>
        </div>
    )
}