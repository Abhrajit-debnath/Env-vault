const ProjectCard = () => {
  return (
    <div className="bg-gray-800 rounded-lg max-w-md">
      <div className="p-5">
        <div className="flex justify-between pb-3 items-center">
          <h3 className="font-inter">Project Name</h3>
          <div className="font-inter text-xs bg-green-900 px-2 py-1 rounded-xl text-green-400">Production</div>
        </div>
        <p className="font-inter text-gray-400 font-light text-sm pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, sapiente!</p>
        <div className="flex justify-between">
          <h3 className="font-inter text-sm text-gray-400">5 variables</h3>
          <button className="font-inter text-sm text-blue-700">View</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
