
const About = () => {
    return (
      <div className="animate-fade-in pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our journey in providing excellence in education and shaping
              future leaders.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-6">
                To provide quality education that empowers students with knowledge,
                skills, and values necessary for lifelong success. We strive to
                create an environment that fosters creativity, critical thinking, and
                personal growth.
              </p>
  
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To be a leading educational institution that nurtures well-rounded
                individuals who contribute positively to society. We envision a
                learning community where every student reaches their full potential.
              </p>
            </div>
  
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Academic Excellence
                </h3>
                <p className="text-gray-600">
                  Our commitment to academic excellence is reflected in our
                  comprehensive curriculum, experienced faculty, and modern teaching
                  methods.
                </p>
              </div>
  
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Student Development
                </h3>
                <p className="text-gray-600">
                  We focus on holistic development through extracurricular
                  activities, leadership opportunities, and personal mentoring.
                </p>
              </div>
  
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Community Engagement
                </h3>
                <p className="text-gray-600">
                  We actively engage with our community through various outreach
                  programs and collaborative initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  