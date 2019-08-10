import React, {Component} from 'react'
import ProjectBox from './ProjectBox'

class Projects extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            repositories: []
        };
    }

    async componentDidMount()
    {
        let url = "https://api.github.com/users/rorrorojas3/repos";
        let apiData = await fetch(url);
        let repositories = await apiData.json();
        this.setState({
            repositories: repositories
        })                 
    }

    render()
    {
        return(
            <div>
                {this.state.repositories.map((repo, key) => 
                    <ProjectBox 
                        name={repo.name} 
                        url={repo.html_url}
                        description={repo.description}
                        language={repo.language}/>)}
            </div>
        );
    }
}

export default Projects;