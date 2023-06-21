
// import { ShareSocial } from 'react-share-social';
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    FacebookShareCount,
    LineShareButton,
    LinkedinIcon,
    MailruIcon,
} from "react-share";

export const SocailShare = () => {
    return (
        <div>
            {/* <ShareSocial
                url="url_to_share.com"
                socialTypes={['facebook', 'twitter', 'linkedin', 'email']}
            /> */}
            <FacebookShareButton
                url={'https://www.example.com'}
                quote={'Dummy text!'}
                hashtag="#muo"
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <LineShareButton
                url={'https://www.example.com'}
            >
                <LinkedinIcon size={32} round />
            </LineShareButton>
            <EmailShareButton
                url={'https://www.example.com'}
            >
                <EmailIcon size={32} round />
            </EmailShareButton>
        </div>
    )
}