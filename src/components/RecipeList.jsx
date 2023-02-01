import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RecipeList = ({recipes, type}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        {recipes?.map((recipe, idx) => {
            return (
                <div className='rounded bg-slate-300 overflow-hidden' key={idx}>
                    <Image src={recipe.strMealThumb} width={500} height={500} alt='recipe image' />

                    <div className='p-5'>
                        <h2 className='text-2xl font-bold'>{recipe.strMeal}</h2>
                        <Link className='text-white bg-blue-500 rounded p-1 px-3 block mt-5 hover:bg-blue-600 text-center' href={`/types/${type}/${recipe.idMeal}`}>
                            Get recipe detail
                        </Link>
                    </div>
                </div>

              
            )
        })}
    </div>
  )
}

export default RecipeList