import { Container } from "@/components/ui/container";

export default function VirtualTour() {
  return (
    <div className="flex flex-col min-h-screen py-8">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0E3150] dark:text-white">
          Virtual Tour
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          In facilisi dolor imperdiet magna. Massa in amet integer tellus purus
          sem sed bibendum. Sit mollis amet faucibus dapibus lectus amet eget
          urna velit. Purus nulla donec purus pulvinar platea. Imperdiet platea
          pulvinar consectetur sed faucibus sed netus.
        </p>
        <div className="mt-12">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/XxMfw_a6neY"
            title="Video Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </div>
  );
}
