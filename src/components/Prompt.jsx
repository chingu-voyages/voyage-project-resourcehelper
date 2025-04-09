import { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'

const Prompt = () => {
  const [aiAnswer, setAiAnswer] = useState(''); // Declare a state variable...

  const handleSubmit = async (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault()
  
    // Read the form data
    const form = e.target
    const formData = new FormData(form)
    const formJson = Object.fromEntries(formData.entries())

    // Initialize the context information
    const contextInfo = 
      'Use the following context information to answer the question: ' +
      '1. Planting a tree requires tools: gloves, shovel, and a rake. ' +
      '2. The best time to plant a tree is in the spring or fall. ' +
      '3. Trees need water, sunlight, and nutrients to grow. ' +
      '4. Trees can provide shade, beauty, and habitat for wildlife. ' +
      '5. Trees can help reduce air pollution and improve air quality. ' +
      '6. Trees can help reduce noise pollution and provide privacy. ' +
      '7. Trees can increase property value and improve curb appeal. ' +
      '8. Trees can provide food and shelter for birds and other wildlife. ' +
      '9. Trees can help reduce soil erosion and improve water quality. ' +
      '10. Trees can help mitigate climate change by absorbing carbon dioxide.'
      '11. To plant a tree:' +
      '   a. Choose a location that gets plenty of sunlight and has good soil drainage. ' +
      '   b. Dig a hole that is twice as wide as the root ball of the tree. ' +
      '   c. Remove the tree from its container and place it in the hole. ' +
      '   d. Fill the hole with soil and water the tree thoroughly. ' +
      '   e. Add mulch around the base of the tree to help retain moisture and suppress weeds. ' +
      '   f. Water the tree regularly, especially during dry spells. ' +
      '   g. Fertilize the tree once a year with a balanced fertilizer. ' +
      '   h. Prune the tree as needed to remove dead or damaged branches and to shape the tree. ' +
      '   i. Monitor the tree for pests and diseases and take action as needed. ' +
      '   j. Enjoy the beauty and benefits of your new tree!'

    // Execute the query
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
    const result = await model.generateContent(contextInfo.concat(' ',formJson.aiPrompt))
    setAiAnswer(result.response.text())
  }

  return (
    <div>
      <form method="post" onSubmit={ handleSubmit }>
        <label>
            What's your question? <input name="aiPrompt"  />
        </label>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
        <hr />        
      </form>
      <h1>Results:</h1>
      {aiAnswer !== '' && <p>{ aiAnswer }</p>}
      <hr />
    </div>
  )
}

export default Prompt
