"use client"
import SplitText from "@/components/SplitText";
const SectionTitle = ({ title, className }: { title: string, className?: string }) => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (

    <div className="">
      <SplitText
        text={title}
        className={`${className}`}
        delay={100}
        duration={0.5}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </div>

  );
};

export default SectionTitle;