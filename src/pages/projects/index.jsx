import { Button } from '@components/ui';
import './style.scss';
import { projects } from '@mocks';

export const Projects = () => {
  return (
    <>
      <div className='flex flex-wrap gap-x-[50px] gap-y-[20px]'>
        {
          projects?.map(project => (
            <div key={project?.title} className="project-card text-gray-400 rounded-md">
              <img src={project?.image} alt={project?.title} />
              <div className='p-5'>
                <h3>Name: {project?.title}</h3>
                <p>Used: {project?.used}</p>
              </div>

              <div className='flex gap-x-2 relative bottom-0 left-4'>
              <a target='_blank' href={project?.link}><Button className='px-[20px] bg-gray-500 h-[50px] text-white hover:scale-105 duration-300' text='View site'/></a>

              <a target='_blank' href={project?.github}><Button className='px-[20px] bg-gray-500 h-[50px] text-white hover:scale-105 duration-300' text='View codes'/></a>
              </div>
            </div>
          ))
        }
      </div>

      <a href="https://github.com/Mirabbosss?tab=repositories" target='_blank' className='relative bottom-[-20px] left-[45%]'>
      <Button className='w-[130px] bg-gray-500 h-[50px] text-white px-3 hover:scale-105 duration-300' text='More projects'/>
      </a>
    </>
  )
}
