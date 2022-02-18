import React from 'react'

export default function Location() {
  return (
    <div className="container py-6">
      <div className="max-w-3xl">
        <div className="prose">
          <h2 className="normal-letter-spacing">Rec Van Location</h2>
          <p>
            Rec Van is centrally located in Fremont off I-880 at Auto Mall
            Parkway, just a short drive to some of the most scenic and
            picturesque escapes in the country. The Van Revolution starts here!
            Let Rec Van get you headed towards 17-mile Drive, Napa or Sonoma
            wineries, Point Reyes National Seashore, Yosemite National Park, the
            redwood coast and beyond!
          </p>
          <iframe
            className="map-container"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.2180272146334!2d-121.9666574491539!3d37.50277557971073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc713df25b02d%3A0xde63a6444964c7e!2s5070%20Brandin%20Ct%2C%20Fremont%2C%20CA%2094538!5e0!3m2!1sen!2sus!4v1611877232976!5m2!1sen!2sus"
            width={600}
            height={450}
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />
          <div className="row location-info-container">
            <div className="col-12 col-md-6">
              <h4 className="location-header">Sales</h4>
              <p className="phone-field">
                Phone: <a href="tel:8336141693">833-614-1693</a>
              </p>
              <p className="phone-field">
                Email: <a href="mailto:sales@recvan.com">sales@recvan.com</a>
              </p>
              <p className="phone-field">
                Hours: Mon-Sat 9am-6pm / Sun 10am-6pm
              </p>
              <h4 className="location-header">Sell Your Camper Van</h4>
              <p className="phone-field">
                Phone: <a href="tel:8336141693">833-614-1693</a>
              </p>
              <p className="phone-field">
                Email:{' '}
                <a href="mailto:buymyvan@recvan.com">buymyvan@recvan.com</a>
              </p>
            </div>
            <div className="col-12 col-md-6">
              <h4 className="location-header">Mobile Service</h4>
              <p className="phone-field">
                Phone: <a href="tel:5109809888">510-980-9888</a>
              </p>
              <p className="phone-field">
                Email:{' '}
                <a href="mailto:servicerequestfremont@recvan.com">
                  servicerequestfremont@recvan.com
                </a>
              </p>
              <p className="phone-field">
                Hours: Mon-Fri 8am-5pm / Closed Sat-Sun
              </p>
            </div>
          </div>
          <p className="additional-info">
            Creating the Van Revolution in the greater San Francisco Bay Area of
            California for camper vans, Sprinter vans, Sprinter RVs, ProMaster
            vans and Transit vans, Rec Van is your single source location to
            discover all the varieties of adventure vans. Our industry experts
            are ready to assist you in finding the van that fits your needs and
            lifestyle.
          </p>
        </div>
      </div>
    </div>
  )
}
