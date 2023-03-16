var _ = require('lodash');

const dummy = (array) => {
    return !array.length?1:array[0]
}
  
const totalLike = (array) => {
    
    const reducer = (sum, item) => {
      return sum + item.likes
    }
    return array.length === 0
    ? 0
    : array.reduce(reducer, 0)   
 }

 const mostFavoried = (array) => {
    const maxLike = Math.max(...array.map(x => x.likes))
    const maxLikeAuthor = array.find(x => x.likes === maxLike)
    const maxLikeAuthorSelected = {"author":maxLikeAuthor.author,
                                   "likes":maxLikeAuthor.likes,
                                   "title":maxLikeAuthor.title
                                  } 
    return maxLikeAuthorSelected
 }

 const mostBlogs = (array) => {
    let arr2 = [];
    let key = "author"    
    array.forEach((x)=>{           
        const foundedBlog = arr2.find(e=>e[key] === x[key])
        if(foundedBlog){        
            foundedBlog.blogCount++
                     
        } else{    
            const newObj = {
                "author":x.author,
                "blogCount":1
            }                  
            arr2.push(newObj);
        }
    })
    const maxBlogs = _.maxBy(arr2,e=>e.blogCount)
    
    return maxBlogs
}

const mostLikes = (array) => {
    let arr2 = [];
    let key = "author"    
    array.forEach((x)=>{           
        const foundedBlog = arr2.find(e=>e[key] === x[key])
        if(foundedBlog){        
            foundedBlog.likes+=x.likes                     
        } else{    
            const newObj = {
                "author":x.author,
                "likes":x.likes
            }                  
            arr2.push(newObj);
        }
    })
    const maxTotalLikes = _.maxBy(arr2,e=>e.likes)
   
    return maxTotalLikes
}

module.exports = {
    dummy,
    totalLike,
    mostFavoried,
    mostBlogs,
    mostLikes
}