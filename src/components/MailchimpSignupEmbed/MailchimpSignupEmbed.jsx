import React from 'react';
import './MailchimpSignupEmbed.scss';

const MailchimpSignupEmbed = () => {
    return (
        <div id="mc_embed_shell">
            <div id="mc_embed_signup">
                <form
                    action="https://expressionschurch.us10.list-manage.com/subscribe/post?u=ce61f2e8b02776798e0acfd31&amp;id=fb73493caf&amp;f_id=003147e4f0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_self"
                    noValidate
                >
                    <div id="mc_embed_signup_scroll">
                        <div className="indicates-required">
                            <span className="asterisk">*</span> indicates required
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-FNAME">Name </label>
                            <input type="text" name="FNAME" className="text" id="mce-FNAME" />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-EMAIL">
                                Email Address <span className="asterisk">*</span>
                            </label>
                            <input
                                type="email"
                                name="EMAIL"
                                className="required email"
                                id="mce-EMAIL"
                                required
                            />
                        </div>
                        <div hidden="">
                            <input type="hidden" name="tags" value="14554154,14554547" />
                        </div>
                        <div id="mce-responses" className="clear">
                            <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                            <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                        </div>
                        <div
                            aria-hidden="true"
                            style={{ position: "absolute", left: "-5000px" }}
                        >
                            <input
                                type="text"
                                name="b_ce61f2e8b02776798e0acfd31_fb73493caf"
                                tabIndex="-1"
                            />
                        </div>
                        <div className="clear">
                            <input
                                type="submit"
                                name="subscribe"
                                id="mc-embedded-subscribe"
                                className="button"
                                value="Subscribe"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default MailchimpSignupEmbed;