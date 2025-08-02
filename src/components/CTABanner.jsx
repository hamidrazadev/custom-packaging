// import { Button } from '@/components/ui/button';

import { Button } from "./ui/button";

const CTABanner = ({
    title,
    subtitle,
    buttonText,
    buttonAction,
    variant = 'secondary'
}) => {
    const bgColor = variant === 'primary' ? 'bg-primary' : 'bg-secondary';
    const textColor = variant === 'primary' ? 'text-white' : 'text-accent';
    const buttonVariant = variant === 'primary' ? 'secondary' : 'default';

    return (
        <section className={`${bgColor} py-16`}>
            <div className="container mx-auto px-4 text-center">
                <h2 className={`text-3xl lg:text-4xl font-bold ${textColor} mb-4`}>
                    {title}
                </h2>
                {subtitle && (
                    <p className={`text-lg ${textColor} mb-8 opacity-90`}>
                        {subtitle}
                    </p>
                )}
                <Button
                    size="lg"
                    variant={buttonVariant}
                    onClick={buttonAction}
                    className="px-8 py-3 text-lg"
                >
                    {buttonText}
                </Button>
            </div>
        </section>
    );
};

export default CTABanner;
