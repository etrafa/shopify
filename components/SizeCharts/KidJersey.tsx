const KidJersey = () => {
  return (
    <table className="w-full mt-12 lg:w-7/12 lg:mx-auto">
      <thead className="bg-tableGray border-b">
        <tr className="text-xs font-extralight">
          <th>Size</th>
          <th>
            Height <br />
            (cm)
          </th>
          <th>Age</th>
          <th>Clothing Lenght(cm)</th>
          <th>
            1/2Bust <br />
            (cm)
          </th>
          <th>
            1/2Waistline <br />
            (cm)
          </th>
          <th>Pants Length</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-center h-12 border-b bg-neutral-100 hover:font-bold">
          <td>16</td>
          <td>95-105</td>
          <td>3-5</td>
          <td>45</td>
          <td>34</td>
          <td>18</td>
          <td>31</td>
        </tr>
        <tr className="text-center h-12 border-b hover:font-bold">
          <td>18</td>
          <td>105-115</td>
          <td>5-6</td>
          <td>48</td>
          <td>36</td>
          <td>20</td>
          <td>33</td>
        </tr>
        <tr className="text-center h-12 border-b bg-neutral-100 hover:font-bold">
          <td>20</td>
          <td>115-125</td>
          <td>6-7</td>
          <td>51</td>
          <td>38</td>
          <td>22</td>
          <td>35</td>
        </tr>
        <tr className="text-center h-12 border-b hover:font-bold">
          <td>22</td>
          <td>125-135</td>
          <td>7-8</td>
          <td>54</td>
          <td>40</td>
          <td>24</td>
          <td>37</td>
        </tr>
        <tr className="text-center h-12 border-b bg-neutral-100 hover:font-bold">
          <td>24</td>
          <td>135-145</td>
          <td>9-10</td>
          <td>57</td>
          <td>42</td>
          <td>26</td>
          <td>39</td>
        </tr>
        <tr className="text-center h-12 border-b hover:font-bold">
          <td>26</td>
          <td>145-160</td>
          <td>11-12</td>
          <td>60</td>
          <td>44</td>
          <td>28</td>
          <td>41</td>
        </tr>
        <tr className="text-center h-12 border-b bg-neutral-100 hover:font-bold">
          <td>28</td>
          <td>160-170</td>
          <td>13-15</td>
          <td>63</td>
          <td>46</td>
          <td>30</td>
          <td>43</td>
        </tr>
      </tbody>
    </table>
  );
};
export default KidJersey;
