import React from "react";

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    Collapse,
    NavLink
} from "reactstrap";

class Panels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openedCollapses: [""]
        };
    }
    // with this function we create an array with the opened collapses
    // it is like a toggle function for all collapses from this page
    collapsesToggle = collapse => {
        let openedCollapses = this.state.openedCollapses;
        if (openedCollapses.includes(collapse)) {
            this.setState({
                openedCollapses: []
            });
        } else {
            this.setState({
                openedCollapses: [collapse]
            });
        }
    };
    render() {
        return (
            <>
                <div
                    aria-multiselectable={true}
                    className="card-collapse"
                    id="accordion"
                    role="tablist"
                >
                    <br/>
                    <h3>QR Codes Types: Static vs Dynamic</h3>
                    <Card className="card-plain">
                        <CardHeader role="tab">
                            <NavLink
                                className="btn-simple"
                                aria-expanded={this.state.openedCollapses.includes(
                                    "collapseOne"
                                )}
                                href="#pablo"
                                data-parent="#accordion"
                                data-toggle="collapse"
                                onClick={(e) => { e.preventDefault(); this.collapsesToggle("collapseOne") }}
                            >
                                Static QR Codes{" "}
                            </NavLink>
                        </CardHeader>
                        <Collapse
                            role="tabpanel"
                            isOpen={this.state.openedCollapses.includes("collapseOne")}
                        >
                            <CardBody>
                                <div>
                                    <p className="text-muted">
                                        A Static QR Code contains information that is fixed and uneditable once the Code has been generated.
                                        They are great for personal use and for QR Code API, a key to creating large batches of Codes for employee IDs, event badges, technical product documentation, and much more.
                                    </p>
                                    <table className="table table-dark table-striped mt-5">
                                        <thead>
                                            <tr>
                                                <th scope="col">Static QR Code Type</th>
                                                <th scope="col">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td width="20%"><i className="tim-icons icon-wifi mr-1"></i> WiFi</td>
                                                <td>
                                                    <p>
                                                        Make it easier for your friends and family to connect to your home network, or for guests to access your business WiFi with a simple scan of this QR Code.
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i className="tim-icons icon-coins mr-1"></i> Bitcoin</td>
                                                <td>
                                                    <p>
                                                        Digital magazines, brochures, eBooks, with this Code you can simultaneously boost your marketing, save on printing costs, and offer customers the chance to save and share documents all from the palm of their hand.
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i className="tim-icons icon-paper mr-1"></i> Plain Text</td>
                                                <td>
                                                    <p>
                                                        Display up to 300 characters and the chance to offer your customers any message in any language, regardless of internet access.
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i className="tim-icons icon-mobile mr-1"></i> vCard</td>
                                                <td>
                                                    <p>
                                                        If you have printed business cards, share your email address, phone number, website URL and your company details instantly with a simple scan of a vCard Code.

                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i className="tim-icons icon-attach-87 mr-1"></i> Email</td>
                                                <td>
                                                    <p>
                                                        You can provide customers with a convenient way to contact you with this Code.
                                                        A pre-filled message can be sent with the simple tap of a button, with customers having the option of also editing before sending it.
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </CardBody>
                        </Collapse>
                    </Card>
                    <Card className="card-plain">
                        <CardHeader role="tab">
                            <NavLink
                                className="btn-simple"
                                aria-expanded={this.state.openedCollapses.includes(
                                    "collapseTwo"
                                )}
                                href="#pablo"
                                data-parent="#accordion"
                                data-toggle="collapse"
                                onClick={(e) => { e.preventDefault(); this.collapsesToggle("collapseTwo") }}
                            >
                                Dynamic QR Codes{" "}

                            </NavLink>
                        </CardHeader>
                        <Collapse
                            role="tabpanel"
                            isOpen={this.state.openedCollapses.includes("collapseTwo")}
                        >
                            <CardBody>
                                <div>
                                    <p className="text-muted">
                                        On the other hand, Dynamic QR Codes allow you to update, edit and change the type of the QR Code however many times you need, which makes them the best fit for business and marketing purposes.
                                    </p>
                                    <table className="table table-dark table-striped mt-5">
                                        <thead>
                                            <tr>
                                                <th scope="col">Dynamic QR Code Type</th>
                                                <th scope="col">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td width="20%"><i className="tim-icons icon-wifi mr-1"></i> app Store</td>
                                                <td>
                                                    <p>
                                                        Make it easier for your friends and family to connect to your home network, or for guests to access your business WiFi with a simple scan of this QR Code.
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i className="tim-icons icon-coins mr-1"></i> PDF</td>
                                                <td>
                                                    <p>
                                                        Digital magazines, brochures, eBooks, with this Code you can simultaneously boost your marketing, save on printing costs, and offer customers the chance to save and share documents all from the palm of their hand.
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i className="tim-icons icon-paper mr-1"></i> Social Media</td>
                                                <td>
                                                    <p>
                                                        Display up to 300 characters and the chance to offer your customers any message in any language, regardless of internet access.
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i className="tim-icons icon-mobile mr-1"></i> Coupon</td>
                                                <td>
                                                    <p>
                                                        If you have printed business cards, share your email address, phone number, website URL and your company details instantly with a simple scan of a vCard Code.

                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i className="tim-icons icon-attach-87 mr-1"></i> Business Page</td>
                                                <td>
                                                    <p>
                                                        You can provide customers with a convenient way to contact you with this Code.
                                                        A pre-filled message can be sent with the simple tap of a button, with customers having the option of also editing before sending it.
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </CardBody>
                        </Collapse>
                    </Card>
                </div>
            </>
        );
    }
}

export default Panels;