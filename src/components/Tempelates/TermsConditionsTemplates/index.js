import React from 'react'
import { Box, makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    main: {
        height: 'fit-content',
    }
    ,
    trmTitle: {
        font: 'normal normal normal 4rem Gopher',
        color: '#CFFE00',
        textAlign: 'center',
        padding: '5% 0rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem'
        }
    },
    trmbody: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '15%'
    },
    trmTextGrp: {
        width: '60%',
    },
    trmHeadText: {
        font: 'normal normal bold 3rem Gopher',
        color: '#CFFE00',
        paddingTop: '3rem',
    },
    trmSubHeadText: {
        font: 'normal normal bold 2.5rem Gopher',
        color: '#CFFE00',
        paddingTop: '3rem',
    },
    trmText: {
        font: 'normal normal bold 2.2rem Gopher-hairline ',
        lineHeight: '2.5',
        textAlign: 'left',
        color: '#B1B1B1',
        padding: '2rem 0',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem'
        }
    }

}))

export function TermsAndConditionsTemplates() {
    const classes = useStyles()
    return (
        <Box className={classes.main}>
            <h1 className={classes.trmTitle}> Terms and conditions</h1>

            <Box className={classes.trmbody}>
                <Box className={classes.trmTextGrp}>
                    <h1 className={classes.trmHeadText}> 1. USE OF THE PLATFORM </h1>

                    <h1 className={classes.trmText}>
                        Welcome to www.boat-lifestyle.com ("Site").  <br />The website www.boat-lifestyle.com is owned and operated by YUV Technologies Private Limited ("Company”) a company incorporated under the provisions of the Companies Act, 1956 with its registered office at House No. 19-B, Pushp Vihar  Extension, Indore, Madhya Pradesh - 452010. You may be accessing our Site from a computer or mobile phone device (through an iOS or Android application, for example) and these Terms of Use govern your use of our Site and your conduct, regardless of the means of access. These Terms of Use govern all the products offered on the Site.
                    </h1>

                    <h1 className={classes.trmText}>
                        The Site is only to be used for your personal non-commercial use and information. Your use of the Site and features of the Site shall be governed by these Terms and Conditions (hereinafter " Terms of Use ") along with the Privacy Policy, Shipping Policy and Cancellation, Refund and Return Policy (together " Policies ") as modified and amended from time to time.
                    </h1>

                    <h1 className={classes.trmText}>
                        By mere accessing or using the Site, you are acknowledging, without limitation or qualification, to be bound by these Terms of Use and the Polices, whether you have read the same or not. ACCESSING, BROWSING OR OTHERWISE USING THE SITE INDICATES YOUR UNCONDITIONAL AGREEMENT TO ALL THE TERMS AND CONDITIONS IN THIS AGREEMENT, SO PLEASE READ THIS AGREEMENT CAREFULLY BEFORE PROCEEDING. If you do not agree to any of the terms enumerated in the Terms of Use or the Policies, please do not use the Site. You are responsible to ensure that your access to this Site and material available on or through it are legal in each jurisdiction, in or through which you access or view the Site or such material.
                    </h1>

                    <h1 className={classes.trmText}>
                        Company reserves the unilateral right to change the particulars contained in the Terms of Use or the Policies from time to time and at any time, without notice to its users and in its sole discretion. If Company decides to change the Terms of Use or Policies. Any change or modification to the Terms of Use and the Policies will be effective immediately from the date of such upload of the Terms of Use and Policies on the Site. Your continued use of the Site following the modifications to the Terms of Use and Policies constitutes your acceptance of the modified Terms of Use and Policies whether or not you have read them. For this reason, you should frequently review these Terms of Use, our Guidelines and Rules and any other applicable policies, to understand the terms and conditions that apply to your use of the Site.
                    </h1>



                    <h1 className={classes.trmSubHeadText}> PRIVACY PRACTICES</h1>
                    <h1 className={classes.trmText}>
                        We understand the importance of safeguarding your personal information and we have formulated a Privacy Policy, to ensure that your personal information is sufficiently protected. Apart from these Terms of Use, the Privacy Policy shall also govern your visit and use of the Site. Your continued use of the Site implies that you have read and accepted the Privacy Policy and agree to be bound by its terms and conditions. You consent to the use of personal information by the Company in accordance with the terms of and purposes set forth in the Privacy Policy, the same may be subject to amendment from time to time at the sole discretion of the Company.
                    </h1>
                    <h1 className={classes.trmText}>
                        This Site is directed to be used by adults only. We assume that any minor, if at all, accessing our Site is under the supervision of their guardians. The Company or its associates do not knowingly collect information from minors. You will be responsible for maintaining the confidentiality of your account, password, and restricting access to your computer, and you hereby accept responsibility for all activities that occur under your account and password. You acknowledge that the information you provide, in any manner whatsoever, are not confidential or proprietary and does not infringe any rights of a third party in whatsoever nature.
                    </h1>
                    <h1 className={classes.trmText}>
                        If you are accessing, browsing and using the Site on someone else’s behalf; you represent that you have the authority to bind that person to all the terms and conditions herein. In the event that the person refuses to be bound as the principal to the Terms of Use, you agree to accept liability for any harm caused by any wrongful use of the Site resulting from such access or use of the Site in whatsoever nature.
                    </h1>
                    <h1 className={classes.trmText}>
                        If you know or have reasons to believe that the security of your account has been breached, you should contact us immediately at the 'Contact Information' provided below. If we have found a breach or suspected breach of the security of your account, we may require you to change your password, temporarily or permanently block or suspend your account without any liability to the Company.
                    </h1>
                    <h1 className={classes.trmText}>
                        We reserve the right to refuse service and/or terminate accounts without prior notice if these Terms of Use are violated or if we decide, in our sole discretion, that it would be in Company’s and Company’s best interests to do so. You are solely responsible for all contents that you upload, post, email or otherwise transmit via the Site. The information provided to us shall be maintained by us in accordance with our Privacy Policy.
                    </h1>


                    <h1 className={classes.trmSubHeadText}> PRODUCT INFORMATION</h1>
                    <h1 className={classes.trmText}>
                        Company attempts to be as accurate as possible in the description of the product on the Site. However, Company does not warrant that the product description, colour, information or other content of the Site is accurate, complete, reliable, current or error-free. The Site may contain typographical errors or inaccuracies and may not be complete or current. The product pictures are indicative and may not match the actual product.
                    </h1>
                    <h1 className={classes.trmText}>
                        Company reserves the right to correct, change or update information, errors, inaccuracies or omissions at any time (including after an order has been submitted ) without prior notice. Please note that such errors, inaccuracies or omissions may also relate to pricing and availability of the products.
                    </h1>


                    <h1 className={classes.trmSubHeadText}> PRODUCT USE</h1>
                    <h1 className={classes.trmText}>
                        The products and services available on the Site, and the samples, if any, that Site may provide you, are for your personal and/or professional use only. The products or services, or samples thereof, which you may receive from us, shall not be sold or resold for any/commercial reasons.
                    </h1>


                    <h1 className={classes.trmSubHeadText}> PRICING INFORMATION </h1>
                    <h1 className={classes.trmText}>
                        The Company strives to provide accurate product and pricing information, however errors may occur.
                    </h1>
                    <h1 className={classes.trmText}>
                        Company cannot confirm the price of the product until you make the order. Without limiting the generality of Clause 7 (Cancellations, Refunds and Returns) below, if a product is listed at an incorrect price or with incorrect information due to any technical error, Company shall have the right, at its sole discretion, to refuse or cancel any orders placed for that product, unless the product has already been delivered. In the event that an item is wrongly priced, the Company may, at its discretion, either contact you for instructions or cancel your order and notify you of such cancellation. Unless the product ordered by you has been delivered, your offer will not be deemed accepted and the Company will have the right to modify the price of the product/ service and contact you for further instructions using the e-mail address provided by you during the time of registration or placing of order, or cancel the order and notify you of such cancellation. In the event that Company accepts your order the same shall be debited to your credit card/ debit card account and duly notified to you by email that the payment has been processed. The payment may be processed prior to Company’s dispatch of the product that you have ordered. If we have to cancel the order after we have processed the payment, the said amount will be reversed to your credit / debit card account.
                    </h1>
                    <h1 className={classes.trmText}>
                        PRICES AND AVAILABILITY OF THE PRODUCTS PROVIDED OR OFFERRED ON THE SITE ARE SUBJECT TO CHANGE WITHOUT PRIOR NOTICE AND AT THE SOLE DISCRETION OF COMPANY. Company may revise and cease to make available any product/ services at anytime. In the event, the Company is unable to deliver the product to you on time or at all, you will be notified by an e-mail and your order will be automatically cancelled due to unavailability of the product or at your instructions due to failure to deliver the product on the expected time of delivery by our delivery partners. The Company shall not be liable to pay for any damages in such an event owing to cancellation of the order or delay in delivery.
                    </h1>

                    
                    <h1 className={classes.trmSubHeadText}> CANCELLATIONS, REFUNDS AND RETURNS</h1>
                    <h1 className={classes.trmText}>Please refer to our Warranty and Support page provided on our Site.</h1>


                    <h1 className={classes.trmSubHeadText}> MODE OF PAYMENT</h1>
                    <h1 className={classes.trmText}>
                        Company cannot confirm the price of the product until you make the order. Without limiting the generality of Clause 7 (Cancellations, Refunds and Returns) below, if a product is listed at an incorrect price or with incorrect information due to any technical error, Company shall have the right, at its sole discretion, to refuse or cancel any orders placed for that product, unless the product has already been delivered. In the event that an item is wrongly priced, the Company may, at its discretion, either contact you for instructions or cancel your order and notify you of such cancellation. Unless the product ordered by you has been delivered, your offer will not be deemed accepted and the Company will have the right to modify the price of the product/ service and contact you for further instructions using the e-mail address provided by you during the time of registration or placing of order, or cancel the order and notify you of such cancellation. In the event that Company accepts your order the same shall be debited to your credit card/ debit card account and duly notified to you by email that the payment has been processed. The payment may be processed prior to Company’s dispatch of the product that you have ordered. If we have to cancel the order after we have processed the payment, the said amount will be reversed to your credit / debit card account.
                    </h1>


                    <h1 className={classes.trmSubHeadText}> INTELLECTUAL PROPERTY RIGHTS</h1>










                    <h1 className={classes.trmSubHeadText}> LIMITED LICENSE</h1>
                    <h1 className={classes.trmSubHeadText}> REPRESENTATIONS AND WARRANTIES</h1>
                </Box>

            </Box>
        </Box>
    )
}
