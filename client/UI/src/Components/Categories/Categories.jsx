import React from 'react';
import "./Categories.scss";
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'>
        
        {/* category page breakdown */}
        {/* column-1 */}
        <div className="col">
            <div className="row">
                <img src="https://media.istockphoto.com/id/1349960077/photo/rocking-denim-wear.jpg?s=612x612&w=0&k=20&c=fB3hzEp_aOF2lk6QmMW4sUGDiQhhQkgwQ9OOO3VlDHc=" alt="" srcset="" />
                <button>
                    <Link className="link" to="/products/4" >Sale</Link>
                </button>
            </div>
            <div className="row">
                <img src="https://img.freepik.com/free-photo/high-fashion-portrait-young-beautiful-brunette-woman-wearing-nice-trendy-blue-suit-sexy-fashion-model-posing-studio-fashionable-female-isolated_158538-22188.jpg?w=2000" alt="" />
                <button>
                    <Link className="link" to="/products/1" >Women</Link>
                </button>
            </div>
        </div>
        
        {/* column-2 */}
        <div className="col">
            {/* row3 */}
            <div className="row">
                <img src='https://img.freepik.com/free-photo/woman-with-shopping-bags-jumping_23-2148883713.jpg?w=2002' alt="" srcset="" />
                <button>
                    <Link className="link" to="/products/5" >New Season</Link>
                </button>
            </div>
        </div>

        {/* column-3 */}
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-hipster-lumbersexual-businessman-model-man-dressed-jeans-jacket-clothes_158538-1730.jpg" alt="" srcset="" />
                        <button>
                            <Link className="link" to="/products/2" >Men</Link>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src="https://images.unsplash.com/photo-1611428813653-aa606c998586?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" srcset="" />
                        <button>
                        <Link className="link" to="/products/3" >Children</Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src="https://img.freepik.com/premium-photo/autumn-fashion-clothes-flat-lay-leaf-fall-outfit_645374-1046.jpg" alt="" srcset="" />
                <button>
                        <Link className="link" to="/products/6" >Accessories</Link>
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default Categories