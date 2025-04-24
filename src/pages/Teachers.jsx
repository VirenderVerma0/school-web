
import { GraduationCap } from "lucide-react";

const Teachers = () => {
  const teachers = [
    {
      name: "Dr. Sarah Johnson",
      subject: "Mathematics",
      qualification: "Ph.D. in Mathematics",
      experience: "15+ years",
      image: "/placeholder.svg",
    },
    {
      name: "Prof. Michael Chen",
      subject: "Physics",
      qualification: "Ph.D. in Physics",
      experience: "12+ years",
      image: "/placeholder.svg",
    },
    {
      name: "Dr. Emily Parker",
      subject: "Biology",
      qualification: "Ph.D. in Life Sciences",
      experience: "10+ years",
      image: "/placeholder.svg",
    },
    {
      name: "Prof. David Wilson",
      subject: "Computer Science",
      qualification: "M.Sc. in Computer Science",
      experience: "8+ years",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="animate-fade-in pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Teachers</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated team of educators who are passionate about helping
            students achieve their full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.name}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="aspect-square rounded-lg bg-gray-100 mb-4 overflow-hidden">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {teacher.name}
              </h3>
              <div className="flex items-center text-primary mb-2">
                <GraduationCap className="w-4 h-4 mr-2 text-[#6266f0]" />
                <span className="text-sm text-[#6266f0]">{teacher.subject}</span>
              </div>
              <p className="text-gray-600 text-sm mb-1">
                {teacher.qualification}
              </p>
              <p className="text-gray-600 text-sm">
                Experience: {teacher.experience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
