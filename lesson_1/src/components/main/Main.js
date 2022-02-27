import './Main.css';

export function Main() {
    return <>
        <main className="Main">
            <div className="overview">
                <div className="title">Overview</div>
                <dt className="subTitle">Manufacturer</dt>
                <dd>- McLaren Automotive</dd>
                <dt className="subTitle">Production</dt>
                <dd>- 2017–present</dd>
                <dt className="subTitle">Assembly</dt>
                <dd>- Woking, Surrey, England</dd>
                <dt className="subTitle">Designer</dt>
                <dd>- Frank Stephenson, Robert Melville</dd>
            </div>

            <div className="Body">
                <div className="title">Body and chassis</div>
                <dt className="subTitle">Class</dt>
                <dd>- Sports car</dd>
                <dt className="subTitle">Body style</dt>
                <dd>- 2-door coupe</dd>
                <dt className="subTitle">Layout</dt>
                <dd>- Rear mid-engine, rear-wheel drive</dd>
                <dt className="subTitle">Platform</dt>
                <dd>- MonoCage / monocoque</dd>
                <dt className="subTitle">Doors</dt>
                <dd>- Butterfly doors</dd>
                <dt className="subTitle">Related</dt>
                <dd>- McLaren Senna, McLaren Speedtail, McLaren GT, McLaren Elva</dd>
            </div>

            <div className="powertrain">
                <div className="title">Powertrain</div>
                <dt className="subTitle">Engine</dt>
                <dd>- 4.0 L M840T twin-turbocharged V8</dd>
                <dt className="subTitle">Power output</dt>
                <dd>- 720 PS 530 kW; 710 hp</dd>
                <dt className="subTitle">Transmission</dt>
                <dd>- 7-speed Graziano dual-clutch</dd>
            </div>

            <div className="dimensions">
                <div className="title">Dimensions</div>
                <dt className="subTitle">Wheelbase</dt>
                <dd>- 2,670 mm</dd>
                <dt className="subTitle">Length</dt>
                <dd>- 4,544 mm</dd>
                <dt className="subTitle">Width</dt>
                <dd>- 2,161 mm</dd>
                <dt className="subTitle">Height</dt>
                <dd>- 1,196 mm</dd>
                <dt className="subTitle">Kerb weight</dt>
                <dd>- 3,128 lb / 1,419 kg</dd>
            </div>
        </main>
    </>
}