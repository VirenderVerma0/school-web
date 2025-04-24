
import { Link } from "react-router-dom";
import { GraduationCap, Book, Users, Calendar } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Excellence in Education",
      description: "Providing quality education with modern teaching methodologies.",
    },
    {
      icon: Book,
      title: "Comprehensive Curriculum",
      description: "Well-rounded education covering academics and extracurricular activities.",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from experienced and dedicated teaching professionals.",
    },
    {
      icon: Calendar,
      title: "Regular Assessments",
      description: "Continuous evaluation to ensure academic progress.",
    },
  ];

  return (
    <div className="animate-fade-in pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#6266f0] to-[#38bbf9] py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl text-white md:text-6xl font-bold mb-6">
              Welcome to BR School
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Empowering minds through quality education and fostering a culture of
              excellence in learning.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="font-semibold px-6 py-2 rounded bg-white hover:bg-gray-100">
                <Link to="/about">Learn More</Link>
              </button>
              <button className="px-6 py-2 rounded bg-white text-[#6266f0] hover:bg-gray-100">
                <Link to="/student-portal">Student Portal</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose BR School?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the features that make us stand out in providing quality
              education and shaping future leaders.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-[#6266f0] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#6266f0] text-white rounded-2xl p-8 md:p-16 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join our community of learners and discover the possibilities that
              await you at BR School.
            </p>
            <button
              className="bg-white px-6 py-2 rounded text-[#6266f0] hover:bg-gray-100"
            >
              <Link to="/contact">Contact Us Today</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
