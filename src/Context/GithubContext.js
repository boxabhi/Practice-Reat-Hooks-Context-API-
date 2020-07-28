import React , {createContext, useState, useEffect} from 'react'


export const GithubContent = createContext();


export const GithubProvider = (props)=>{

        const [info,setInfo] = useState({
            "login": "boxabhi",
            "id": 23151289,
            "node_id": "MDQ6VXNlcjIzMTUxMjg5",
            "avatar_url": "https://avatars0.githubusercontent.com/u/23151289?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/boxabhi",
            "html_url": "https://github.com/boxabhi",
            "followers_url": "https://api.github.com/users/boxabhi/followers",
            "following_url": "https://api.github.com/users/boxabhi/following{/other_user}",
            "gists_url": "https://api.github.com/users/boxabhi/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/boxabhi/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/boxabhi/subscriptions",
            "organizations_url": "https://api.github.com/users/boxabhi/orgs",
            "repos_url": "https://api.github.com/users/boxabhi/repos",
            "events_url": "https://api.github.com/users/boxabhi/events{/privacy}",
            "received_events_url": "https://api.github.com/users/boxabhi/received_events",
            "type": "User",
            "site_admin": false,
            "name": null,
            "company": null,
            "blog": "",
            "location": null,
            "email": null,
            "hireable": null,
            "bio": null,
            "twitter_username": null,
            "public_repos": 43,
            "public_gists": 0,
            "followers": 2,
            "following": 0,
            "created_at": "2016-10-30T14:05:43Z",
            "updated_at": "2020-07-27T15:33:30Z"
    })

    const [user , setUser] = useState('')


        const [repo ,setRepo] = useState([
            {
            "id": 276417293,
            "node_id": "MDEwOlJlcG9zaXRvcnkyNzY0MTcyOTM=",
            "name": "Algorithm-visualizer",
            "full_name": "boxabhi/Algorithm-visualizer",
            "private": false,
            "owner": {
            "login": "boxabhi",
            "id": 23151289,
            "node_id": "MDQ6VXNlcjIzMTUxMjg5",
            "avatar_url": "https://avatars0.githubusercontent.com/u/23151289?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/boxabhi",
            "html_url": "https://github.com/boxabhi",
            "followers_url": "https://api.github.com/users/boxabhi/followers",
            "following_url": "https://api.github.com/users/boxabhi/following{/other_user}",
            "gists_url": "https://api.github.com/users/boxabhi/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/boxabhi/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/boxabhi/subscriptions",
            "organizations_url": "https://api.github.com/users/boxabhi/orgs",
            "repos_url": "https://api.github.com/users/boxabhi/repos",
            "events_url": "https://api.github.com/users/boxabhi/events{/privacy}",
            "received_events_url": "https://api.github.com/users/boxabhi/received_events",
            "type": "User",
            "site_admin": false
            },
            "html_url": "https://github.com/boxabhi/Algorithm-visualizer",
            "description": null,
            "fork": false,
            "url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer",
            "forks_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/forks",
            "keys_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/teams",
            "hooks_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/hooks",
            "issue_events_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/issues/events{/number}",
            "events_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/events",
            "assignees_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/assignees{/user}",
            "branches_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/branches{/branch}",
            "tags_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/tags",
            "blobs_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/languages",
            "stargazers_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/stargazers",
            "contributors_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/contributors",
            "subscribers_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/subscribers",
            "subscription_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/subscription",
            "commits_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/contents/{+path}",
            "compare_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/merges",
            "archive_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/downloads",
            "issues_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/issues{/number}",
            "pulls_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/labels{/name}",
            "releases_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/releases{/id}",
            "deployments_url": "https://api.github.com/repos/boxabhi/Algorithm-visualizer/deployments",
            "created_at": "2020-07-01T15:40:24Z",
            "updated_at": "2020-07-01T17:21:03Z",
            "pushed_at": "2020-07-21T08:55:24Z",
            "git_url": "git://github.com/boxabhi/Algorithm-visualizer.git",
            "ssh_url": "git@github.com:boxabhi/Algorithm-visualizer.git",
            "clone_url": "https://github.com/boxabhi/Algorithm-visualizer.git",
            "svn_url": "https://github.com/boxabhi/Algorithm-visualizer",
            "homepage": null,
            "size": 259,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "Vue",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 1,
            "license": null,
            "forks": 0,
            "open_issues": 1,
            "watchers": 0,
            "default_branch": "master"
            },
            {
            "id": 195680828,
            "node_id": "MDEwOlJlcG9zaXRvcnkxOTU2ODA4Mjg=",
            "name": "app.github.io",
            "full_name": "boxabhi/app.github.io",
            "private": false,
            "owner": {
            "login": "boxabhi",
            "id": 23151289,
            "node_id": "MDQ6VXNlcjIzMTUxMjg5",
            "avatar_url": "https://avatars0.githubusercontent.com/u/23151289?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/boxabhi",
            "html_url": "https://github.com/boxabhi",
            "followers_url": "https://api.github.com/users/boxabhi/followers",
            "following_url": "https://api.github.com/users/boxabhi/following{/other_user}",
            "gists_url": "https://api.github.com/users/boxabhi/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/boxabhi/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/boxabhi/subscriptions",
            "organizations_url": "https://api.github.com/users/boxabhi/orgs",
            "repos_url": "https://api.github.com/users/boxabhi/repos",
            "events_url": "https://api.github.com/users/boxabhi/events{/privacy}",
            "received_events_url": "https://api.github.com/users/boxabhi/received_events",
            "type": "User",
            "site_admin": false
            },
            "html_url": "https://github.com/boxabhi/app.github.io",
            "description": "App",
            "fork": false,
            "url": "https://api.github.com/repos/boxabhi/app.github.io",
            "forks_url": "https://api.github.com/repos/boxabhi/app.github.io/forks",
            "keys_url": "https://api.github.com/repos/boxabhi/app.github.io/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/boxabhi/app.github.io/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/boxabhi/app.github.io/teams",
            "hooks_url": "https://api.github.com/repos/boxabhi/app.github.io/hooks",
            "issue_events_url": "https://api.github.com/repos/boxabhi/app.github.io/issues/events{/number}",
            "events_url": "https://api.github.com/repos/boxabhi/app.github.io/events",
            "assignees_url": "https://api.github.com/repos/boxabhi/app.github.io/assignees{/user}",
            "branches_url": "https://api.github.com/repos/boxabhi/app.github.io/branches{/branch}",
            "tags_url": "https://api.github.com/repos/boxabhi/app.github.io/tags",
            "blobs_url": "https://api.github.com/repos/boxabhi/app.github.io/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/boxabhi/app.github.io/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/boxabhi/app.github.io/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/boxabhi/app.github.io/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/boxabhi/app.github.io/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/boxabhi/app.github.io/languages",
            "stargazers_url": "https://api.github.com/repos/boxabhi/app.github.io/stargazers",
            "contributors_url": "https://api.github.com/repos/boxabhi/app.github.io/contributors",
            "subscribers_url": "https://api.github.com/repos/boxabhi/app.github.io/subscribers",
            "subscription_url": "https://api.github.com/repos/boxabhi/app.github.io/subscription",
            "commits_url": "https://api.github.com/repos/boxabhi/app.github.io/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/boxabhi/app.github.io/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/boxabhi/app.github.io/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/boxabhi/app.github.io/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/boxabhi/app.github.io/contents/{+path}",
            "compare_url": "https://api.github.com/repos/boxabhi/app.github.io/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/boxabhi/app.github.io/merges",
            "archive_url": "https://api.github.com/repos/boxabhi/app.github.io/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/boxabhi/app.github.io/downloads",
            "issues_url": "https://api.github.com/repos/boxabhi/app.github.io/issues{/number}",
            "pulls_url": "https://api.github.com/repos/boxabhi/app.github.io/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/boxabhi/app.github.io/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/boxabhi/app.github.io/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/boxabhi/app.github.io/labels{/name}",
            "releases_url": "https://api.github.com/repos/boxabhi/app.github.io/releases{/id}",
            "deployments_url": "https://api.github.com/repos/boxabhi/app.github.io/deployments",
            "created_at": "2019-07-07T17:49:21Z",
            "updated_at": "2019-07-07T20:04:56Z",
            "pushed_at": "2019-07-07T20:04:54Z",
            "git_url": "git://github.com/boxabhi/app.github.io.git",
            "ssh_url": "git@github.com:boxabhi/app.github.io.git",
            "clone_url": "https://github.com/boxabhi/app.github.io.git",
            "svn_url": "https://github.com/boxabhi/app.github.io",
            "homepage": "",
            "size": 434,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "HTML",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 0,
            "license": {
            "key": "mit",
            "name": "MIT License",
            "spdx_id": "MIT",
            "url": "https://api.github.com/licenses/mit",
            "node_id": "MDc6TGljZW5zZTEz"
            },
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "master"
            },
            ])

            async function function_set_Info(url){
                await fetch(url)
                .then(response => response.json())
                .then(result =>{
                    setInfo(result)
                })
            }

            async function function_set_repo(url){
                await fetch(url)
                .then(response => response.json())
                .then(result =>{
                    setRepo(result)
                })
            }

            useEffect(()=>{
                const url = `https://api.github.com/users/${user}`
                const repo_url = `https://api.github.com/users/${user}/repos`
                
                
                function_set_Info(url)
                function_set_repo(repo_url)

                
        
             },[user])
        
           

        return(
         <GithubContent.Provider value={{info,repo,setUser}}>
             {props.children}
             </GithubContent.Provider>
        )

}