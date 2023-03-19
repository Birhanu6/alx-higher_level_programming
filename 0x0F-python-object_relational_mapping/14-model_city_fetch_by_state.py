#!/usr/bin/python3
"""
print cities with their corresponding states
"""

if __name__ == "__main__":
    import sys
    from model_city import City
    from model_state import Base, State
    from sqlalchemy import (create_engine)
    from sqlalchemy.orm import sessionmaker

    user = sys.argv[1]
    pwd = sys.argv[2]
    db_name = sys.argv[3]

    eng_txt = 'mysql+mysqldb://{}:{}@localhost/{}'.format(user, pwd, db_name)
    engine = create_engine(eng_txt, pool_pre_ping=True)
    Base.metadata.create_all(engine)
    Session = sessionmaker(bind=engine)
    session = Session()

    ct = session.query(City, State).filter(City.state_id == State.id).\
        order_by(City.id).all()
    for city, state in ct:
        print('{}: ({}) {}'.format(state.name, city.id, city.name))
    session.commit()
