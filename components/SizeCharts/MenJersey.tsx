const MenJersey = () => {
  return (
    <table className="w-full mt-12 lg:w-7/12 lg:mx-auto">
      <thead className="bg-tableGray border-b">
        <tr className="text-xs font-extralight">
          <th>Size</th>
          <th>Height(cm)</th>
          <th>Weight(kg)</th>
          <th>Clothing Lenght(cm)</th>
          <th>Bust(cm)</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-center h-12 border-b bg-neutral-100 hover:font-bold">
          <td>S</td>
          <td>160-165</td>
          <td>60-65</td>
          <td>71</td>
          <td>102</td>
        </tr>
        <tr className="text-center h-12 border-b hover:font-bold">
          <td>M</td>
          <td>165-170</td>
          <td>60-70</td>
          <td>73</td>
          <td>106</td>
        </tr>
        <tr className="text-center h-12 border-b bg-neutral-100 hover:font-bold">
          <td>L</td>
          <td>170-175</td>
          <td>71-75</td>
          <td>75</td>
          <td>110</td>
        </tr>
        <tr className="text-center h-12 border-b hover:font-bold">
          <td>XL</td>
          <td>175-180</td>
          <td>76-80</td>
          <td>77</td>
          <td>114</td>
        </tr>
        <tr className="text-center h-12 border-b bg-neutral-100 hover:font-bold">
          <td>2XL</td>
          <td>180-185</td>
          <td>81-87</td>
          <td>81</td>
          <td>120</td>
        </tr>
        <tr className="text-center h-12 border-b hover:font-bold">
          <td>3XL</td>
          <td>185-190</td>
          <td>88-95</td>
          <td>83</td>
          <td>124</td>
        </tr>
        <tr className="text-center h-12 border-b bg-neutral-100 hover:font-bold">
          <td>4XL</td>
          <td>190-195</td>
          <td>96-103</td>
          <td>85</td>
          <td>128</td>
        </tr>
      </tbody>
    </table>
  );
};
export default MenJersey;
