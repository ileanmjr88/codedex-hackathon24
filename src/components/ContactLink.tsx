import react from "@astrojs/react";

interface ContactLinkProps {
  text: string;
  url: string;
  image: ImageMetadata;
}

const ContactLink = ({ text, url, image }: ContactLinkProps) => {
    return (
        <a href={url} className="flex items-center p-4" title={text}>
            <img  src={image.src} alt={text} />
        </a>
    );
}

export default ContactLink;
