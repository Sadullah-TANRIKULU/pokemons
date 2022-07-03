import Layout from '../components/Layout';
import Link from 'next/Link';
import React from 'react';


const pokemon = ({ pokeman }) => {
    console.log(pokeman);
    return (
        <Layout title={pokeman.name} >
            <h1 className='text-4xl mb-2 text-center capitalize' >
                {pokeman.name}
            </h1>
            <img className='mx-auto w-2/4' src={pokeman.image} alt={pokeman.name} />
            <p>
                <span className='font-bold mr-2' > Weight: </span>
                {pokeman.weight}
            </p>
            <p>
                <span className='font-bold mr-2' > Height: </span>
                {pokeman.height}
            </p>
            <h2 className='text-2xl mt-6 mb-2' >Types</h2>
            {pokeman.types.map((type, index) => (<p key={index} > {type.type.name} </p>))}
            <p className='mt-10 text-center' >
                <Link href="/" >
                    <a className='text-2xl underline'>Home</a>
                
                </Link>

            </p>

        </Layout>
    );
}

export default pokemon;

export const getServerSideProps = async ({ query }) => {
    const id = query.id;
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokeman = await res.json();
        const pokeId = id;
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;
        pokeman.image = image;
        return {
            props: {
                pokeman
            },
        }

    } catch (error) {
        console.log(error);
    }

}