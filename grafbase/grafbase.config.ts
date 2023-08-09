import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({ min: 2, max: 20}),
// this sets a minimum length of 2 and maximum length of 20 for the name
  email: g.string().unique(),
  // the unique function checks if the email entered is unique
  avataUrl: g.url(), //this is for the profile pic
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(() => Project).list().optional(),

})
 
const Project = g.model('Project', {
  title: g.string().length({ min: 3}),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(()=> User)
})
export default config({
  schema: g
 
})