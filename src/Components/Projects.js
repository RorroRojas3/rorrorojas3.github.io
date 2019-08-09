import React, {Component} from 'react'

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
                {this.state.repositories.map((repos, key) => 
                    <div key={repos.id}>{repos.name}</div>)}
            </div>
        );
    }
}

export default Projects;