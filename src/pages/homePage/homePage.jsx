import SearchBar from '../../components/searchBar/searchBar'
import './homePage.scss'

function HomePage(){
  return (
    <div className='homePage'>
        <div className="textContainer">
            <div className="wrapper">
                <h1 className='title'>
                    Find your dream item and barter today
                </h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vestibulum nec odio ipsum. Suspendisse cursus malesuada facilisis.
                    id ultrices mi tempus imperdiet nulla. Pariature fugit quae, 
                    in, quos, est doloribus, voluptas quibusdam voluptates!
                </p>
                
                <SearchBar />

                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Item categories</h2>
                    </div>

                    <div className="box">
                        <h1>2000+</h1>
                        <h2>Items on offer</h2>
                    </div>

                    <div className="box">
                        <h1>12000+</h1>
                        <h2>Items bartered</h2>
                    </div>

                </div>

            </div>
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}

export default HomePage